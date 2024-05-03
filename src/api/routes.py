"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from flask_jwt_extended import JWTManager, create_access_token, jwt_required, get_jwt_identity
from api.models import db, User, Provider, Consumer, Course
from api.utils import generate_sitemap, APIException
from flask_cors import CORS
from sqlalchemy.orm import sessionmaker

api = Blueprint('api', __name__)

# Allow CORS requests to this API
CORS(api)

# Endpoint para agregar un nuevo usuario
@api.route('/register', methods=['POST'])
def register_user():
    data = request.json
    username = data.get('username', None)
    email = data.get('email', None)
    password = data.get('password', None)
    role = data.get('role')

    if not email or not password:
        return jsonify({'message': 'An email and password are required'}), 400

    existing_user = User.query.filter_by(email=email).first()
    if existing_user:
        return jsonify({'message': 'The email is already in use'}), 400

    if role == 'provider':
        new_user = Provider(username=username, email=email, password=password, is_active=True, role=role)
    elif role == 'consumer':
        new_user = Consumer(username=username, email=email, password=password, is_active=True, role=role)
    else:
        new_user = User(username=username, email=email, password=password, is_active=True , role=role)
    try:
        db.session.add(new_user)
        db.session.commit()
        return jsonify({'message': 'Successfully registered user'}), 201
    except Exception as e:
        db.session.rollback()
        return jsonify({'message': f'Failed to register user: {str(e)}'}), 500
    
# Endpoint para hacer login
@api.route('/log-ins', methods=['POST'])
def handle_logins():
    email = request.json.get('email', None)
    password = request.json.get('password', None)

    if email is None or password is None:
        return jsonify({'message': 'Email or password is missing'}), 400
    
    user = User.query.filter_by(email=email).one_or_none()

    if user is None:
        return jsonify({'message': 'User not found'}), 404
   
    if not user.check_password(password):
        return jsonify({'message': 'Incorrect email or password'}), 401

    access_token = create_access_token(identity=user.id)
    return jsonify(access_token=access_token, email=user.email, role=user.role, username=user.username, id=user.id), 201


# Endpoint para eliminar un usuario
@api.route('/user/<int:user_id>', methods=['DELETE'])
def delete_user(user_id):
    user = User.query.get(user_id)
    if not user:
        return jsonify({'message': 'User not found'}), 404

    db.session.delete(user)
    db.session.commit()

    return jsonify({'message': 'User deleted successfully'}), 200

# Endpoint para modificar un usuario
@api.route('/user/<int:user_id>', methods=['PUT'])
def update_user(user_id):
    user = User.query.get(user_id)
    if not user:
        return jsonify({'message': 'User not found'}), 404

    data = request.json
    username = data.get('username')
    email = data.get('email')
    password = data.get('password')

    if username:
        user.username = username
    if email:
        user.email = email
    if password:
        user.password = password

    db.session.commit()

    return jsonify({'message': 'User updated successfully'}), 200

# Obtener todos los cursos y Crear un nuevo curso
@api.route('/courses', methods=['GET', 'POST'])
def handle_courses():
    if request.method == 'GET':
        courses = Course.query.all()
        return jsonify([course.serialize() for course in courses]), 200

    elif request.method == 'POST':
        data = request.json
        new_course = Course(
            title=data['title'],
            nationality=data['nationality'],
            description=data['description'],
            price=data['price'],
            number_of_sessions=data['number_of_sessions'],
            author=data['author'],
            date_of_release=data['date_of_release']
        )
        db.session.add(new_course)
        db.session.commit()
        return jsonify(message='Course created successfully'), 201
    
# Obtener los cursos de un usuario-consumer
@api.route('/consumer/<int:consumer_id>', methods=['GET'])
def get_consumer_courses(consumer_id):
    consumer = Consumer.query.get_or_404(consumer_id)
    courses = consumer.courses
    return jsonify([course.serialize() for course in courses])

# Obtener los cursos de un usuario-provider
@api.route('/provider/<int:provider_id>/courses', methods=['GET'])
def get_provider_courses(provider_id):
    provider = Provider.query.get_or_404(provider_id)
    courses = provider.courses
    return jsonify([course.serialize() for course in courses])

# Obtener un curso
@api.route('/course/<int:course_id>', methods=['GET'])
def get_course(course_id):
    course = Course.query.get_or_404(course_id)
    return jsonify(course.serialize())

@api.route('/hello', methods=['POST', 'GET'])
def handle_hello():

    response_body = {
        "message": "Hello! I'm a message that came from the backend, check the network tab on the google inspector and you will see the GET request"
    }

    return jsonify(response_body), 200