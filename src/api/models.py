from flask_sqlalchemy import SQLAlchemy
from flask_bcrypt import Bcrypt

db = SQLAlchemy()
bcrypt = Bcrypt()

class User(db.Model):
    __tablename__ = 'users'
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(80), unique=True, nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password_hash = db.Column(db.String(120))
    is_active = db.Column(db.Boolean(), default=True)
    role = db.Column(db.String(20))

    __mapper_args__ = {
        'polymorphic_identity': 'user',
        'polymorphic_on': role
    }

    def __init__(self, username, email, password, is_active, role):
        self.username = username
        self.email = email
        self.is_active = is_active 
        self.role = role
        self.password_hash = bcrypt.generate_password_hash(password).decode('utf-8')

    def check_password(self, password):
        return bcrypt.check_password_hash(self.password_hash, password)

    def __repr__(self):
        return f'<User {self.email}>'

class Provider(User):
    __tablename__ = 'providers'
    

    # Campos específicos para el proveedor

    __mapper_args__ = {
        'polymorphic_identity': 'provider'
    }

    def __repr__(self):
        return f'<Provider {self.username}>'

class Consumer(User):
    __tablename__ = 'consumers'
   
    # Campos específicos para el consumidor

    __mapper_args__ = {
        'polymorphic_identity': 'consumer'
    }

    def __repr__(self):
        return f'<Consumer {self.username}>'
    
