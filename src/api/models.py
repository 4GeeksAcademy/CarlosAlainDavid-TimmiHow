from flask_sqlalchemy import SQLAlchemy


db = SQLAlchemy()

# class User(db.Model):
#     id = db.Column(db.Integer, primary_key=True)
#     email = db.Column(db.String(120), unique=True, nullable=False)
#     password = db.Column(db.String(80), unique=False, nullable=False)
#     is_active = db.Column(db.Boolean(), unique=False, nullable=False)

#     def __repr__(self):
#         return f'<User {self.email}>'

#     def serialize(self):
#         return {
#             "id": self.id,
#             "email": self.email,
#             # do not serialize the password, its a security breach
#         }
    

class User(db.Model):
    __tablename__ = 'users'
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(80), unique=True, nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(120), nullable=False)
    is_active = db.Column(db.Boolean(), unique=False, nullable=False)
    role = db.Column(db.String(20))  # This field will be used to distinguish between provider and consumer

    __mapper_args__ = {
        'polymorphic_identity': 'user',
        'polymorphic_on': role
    }

    def __repr__(self):
        return f'<User {self.email}>'

class Provider(User):
    __tablename__ = 'providers'
    id = db.Column(db.Integer, db.ForeignKey('users.id'), primary_key=True)
    # Add provider-specific fields here

    __mapper_args__ = {
        'polymorphic_identity': 'provider'
    }

    def __repr__(self):
        return f'<Provider {self.username}>'

class Consumer(User):
    __tablename__ = 'consumers'
    id = db.Column(db.Integer, db.ForeignKey('users.id'), primary_key=True)
    # Add consumer-specific fields here

    __mapper_args__ = {
        'polymorphic_identity': 'consumer'
    }

    def __repr__(self):
        return f'<Consumer {self.username}>'