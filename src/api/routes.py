"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from flask_jwt_extended import JWTManager, create_access_token, jwt_required, get_jwt_identity
from api.models import db, User, Provider, Consumer
from api.utils import generate_sitemap, APIException
from flask_cors import CORS
from sqlalchemy.orm import sessionmaker

# # Crear la aplicación Flask
# app = Flask(__name__)

# # Configurar la base de datos y otros ajustes
# app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///your_database.db'
# app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
# app.config['JWT_SECRET_KEY'] = 'your_secret_key'

# # Inicializar la extensión SQLAlchemy
# db.init_app(app)

api = Blueprint('api', __name__)

# Allow CORS requests to this API
CORS(api)

# # Inicializar la extensión JWTManager
# jwt = JWTManager(app)


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
        return jsonify({'message': 'No email or password'}), 400
    
    user = User.query.filter_by( email = email ).one_or_none()

    if user is None:
        return jsonify({'message': "No such user"}), 404
   
    if user.password != password:
        return jsonify({"message": "Bad username or password"}), 401

    access_token = create_access_token(identity=user.id)
    return jsonify(access_token=access_token, email=user.email, role=user.role, username=user.username), 201


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



@api.route('/hello', methods=['POST', 'GET'])
def handle_hello():

    response_body = {
        "message": "Hello! I'm a message that came from the backend, check the network tab on the google inspector and you will see the GET request"
    }

    return jsonify(response_body), 200

# # Registrar el Blueprint con la aplicación Flask
# app.register_blueprint(api)

# # Entrada principal del programa
# if __name__ == '__main__':
#     api.run(debug=True)