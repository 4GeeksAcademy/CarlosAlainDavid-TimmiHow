from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class User(db.Model):
    __tablename__ = 'users'
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(80), unique=True, nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(120), nullable=False)
    is_active = db.Column(db.Boolean())
    role = db.Column(db.String(20))

    __mapper_args__ = {
        'polymorphic_identity': 'user',
        'polymorphic_on': role
    }

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