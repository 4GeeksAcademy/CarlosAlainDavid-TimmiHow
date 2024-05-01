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
    
class Course(db.Model):
    __tablename__ = 'courses'
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(100), nullable=False)
    nationality = db.Column(db.String(50), nullable=False)
    description = db.Column(db.Text, nullable=False)
    price = db.Column(db.Float, nullable=False)
    number_of_sessions = db.Column(db.Integer, nullable=False)
    author = db.Column(db.String(100), nullable=False) 
    date_of_release = db.Column(db.Date)
    reviews_counter = db.Column(db.Integer, default=0) 
    reviews_rate = db.Column(db.Float, default=0.0)  
    image = db.Column(db.String(100), default = "rigo")

    def __repr__(self):
        return f'<Course {self.title}>'
    
    def serialize(self):
        return {
            'id': self.id,
            'title': self.title,
            'nationality': self.nationality,
            'description': self.description,
            'price': self.price,
            'number_of_sessions': self.number_of_sessions,
            'author': self.author,
            'date_of_release': self.date_of_release.strftime('%Y-%m-%d') if self.date_of_release else None,
            'reviews_counter': self.reviews_counter,
            'reviews_rate': self.reviews_rate,
            'image': self.image,
        }