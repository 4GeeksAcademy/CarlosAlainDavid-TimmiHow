"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from flask_jwt_extended import create_access_token, jwt_required, get_jwt_identity
from api.models import db, User, Provider, Consumer
from api.utils import generate_sitemap, APIException
from flask_cors import CORS

api = Blueprint('api', __name__)

# Allow CORS requests to this API
CORS(api)

@api.route('/register', methods=['POST'])
def register_user():
    email = request.json.get('email', None)
    password = request.json.get('password', None)

    if not email or not password:
        return jsonify({'error': 'An email and password are required'}), 400

    existing_user = User.query.filter_by(email=email).first()
    if existing_user:
        return jsonify({'error': 'The email is already in use'}), 400

    new_user = User(email=email, password=password, is_active=True)
    db.session.add(new_user)

    try:
        db.session.commit()
        return jsonify({'message': 'Successfully registered user'}), 201
    except Exception as e:
        db.session.rollback()
        return jsonify({'error': f'Failed to register user: {str(e)}'}), 500
    

@api.route('/log-ins', methods=['POST'])
def handle_logins():
    email = request.json.get('email', None)
    password = request.json.get('password', None)

    if email is None or password is None:
        return jsonify({'msg': 'No email or password'}), 400
    
    user = User.query.filter_by( email = email ).one_or_none()

    if user is None:
        return jsonify({'msg': "No such user"}), 404
   
    if user.password != password:
        return jsonify({"msg": "Bad username or password"}), 401

    access_token = create_access_token( identity = user.id )
    return jsonify( access_token = access_token ), 201


# Endpoint para agregar un nuevo usuario
@api.route('/user', methods=['POST'])
def add_user():
    data = request.json
    username = data.get('username')
    email = data.get('email')
    password = data.get('password')
    role = data.get('role')

    if not (username and email and password and role):
        return jsonify({'message': 'Missing parameters'}), 400

    if role == 'provider':
        new_user = Provider(username=username, email=email, password=password)
    elif role == 'consumer':
        new_user = Consumer(username=username, email=email, password=password)
    else:
        new_user = User(username=username, email=email, password=password)

    db.session.add(new_user)
    db.session.commit()

    return jsonify({'message': 'User added successfully'}), 201

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

if __name__ == '__main__':
    api.run(debug=True)

@api.route('/hello', methods=['POST', 'GET'])
def handle_hello():

    response_body = {
        "message": "Hello! I'm a message that came from the backend, check the network tab on the google inspector and you will see the GET request"
    }

    return jsonify(response_body), 200
