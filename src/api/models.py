from flask_sqlalchemy import SQLAlchemy
from sqlalchemy.sql import func

db = SQLAlchemy()


######### TABLA USERS

class Users(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    created_at = db.Column(db.DateTime, server_default=func.now())
    updated_at = db.Column(db.DateTime,server_default=func.now(),onupdate=func.now())
    deleted_at = db.Column(db.DateTime)
    user_name = db.Column(db.String(20),nullable=False) 
    first_name = db.Column(db.String(50), nullable=False)
    last_name = db.Column(db.String(50))
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(80), nullable=False)
    country = db.Column(db.String(50), nullable=False)
    language = db.Column(db.String(50), nullable=False)
    avatar = db.Column(db.String(50))

    posts = db.relationship("Posts")  
    likes = db.relationship("Likes")  
    comments = db.relationship("Comments")  


    def __str__(self):
        return '{}'.format(self.first_name)

    def serialize(self):
        return {
            'id': self.id,
            'user_name': self.user_name,
            'first_name': self.first_name,
            'last_name': self.last_name,
            'email': self.email,
            'country': self.country,
            'language': self.language,
            'avatar': self.avatar
        }



######### TABLA CITIES

class Cities(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    created_at = db.Column(db.DateTime, server_default=func.now())
    updated_at = db.Column(db.DateTime,server_default=func.now(),onupdate=func.now())
    deleted_at = db.Column(db.DateTime)
    city_name = db.Column(db.String(50), nullable=False)
    image = db.Column(db.String(150), nullable=False)
    population = db.Column(db.Integer, nullable=False)
    cost_of_living = db.Column(db.Integer, nullable=False)
    sunny = db.Column(db.Integer, nullable=False)
    humidity = db.Column(db.Integer, nullable=False)
    windy = db.Column(db.Integer, nullable=False)
    rainy = db.Column(db.Integer, nullable=False)
    lowest_temp = db.Column(db.Float, nullable=False)
    highest_temp =db.Column(db.Float, nullable=False)
    average_temp = db.Column(db.Float, nullable=False)
    rental_offer = db.Column(db.Integer, nullable= False)

    likes = db.relationship("Likes")  # AÑADIDO DESPUES
    posts = db.relationship("Posts")  # AÑADIDO DESPUES

    def __str__(self):
        return '<Cities {}>'.format(self.city_name)

    def serialize(self):
        return {
            'id': self.id,
            'city_name': self.city_name,
            'image': self.image,
            'population': self.population,
            'cost_of_living': self.cost_of_living,
            'sunny': self.sunny,
            'humidity': self.humidity,
            'windy': self.windy,
            'rainy': self.rainy,
            'lowest_temp': self.lowest_temp,
            'highest_temp': self.highest_temp,
            'average_temp': self.average_temp,
            'rental_offer': self.rental_offer
        }


######### TABLA POSTS

class Posts(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    created_at = db.Column(db.DateTime, server_default=func.now())
    updated_at = db.Column(db.DateTime,server_default=func.now(),onupdate=func.now())
    deleted_at = db.Column(db.DateTime)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    city_id = db.Column(db.Integer, db.ForeignKey('cities.id'), nullable=False)
    text = db.Column(db.String(150), nullable=False)

    user = db.relationship("Users")
    city = db.relationship("Cities")
    comments = db.relationship("Comments") #añadido despues


    def __str__(self):
        return '<Posts {}>'.format(self.text)

    def serialize(self):
        comments = []
        for comment in self.comments:
            comments.append(comment.serialize())

        return {
            'id': self.id,
            'users': self.user.first_name,
            'city': self.city.city_name,
            'city_id': self.city_id,
            'created_at': self.created_at,
            'text': self.text,
            'comments': comments
        }

######### TABLA LIKES

class Likes(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    created_at = db.Column(db.DateTime, server_default=func.now())
    updated_at = db.Column(db.DateTime,server_default=func.now(),onupdate=func.now())
    deleted_at = db.Column(db.DateTime)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    city_id = db.Column(db.Integer, db.ForeignKey('cities.id'), nullable=False)

    user = db.relationship("Users")
    city = db.relationship("Cities")

    def __str__(self):
        return '<likes {}>'.format(self.user)

    def serialize(self):
        return {
            'id': self.id,
            'user': self.user_id,
            'city_id': self.city_id,
            'text': self.text       
        }


######### TABLA COMMENTS

class Comments(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    created_at = db.Column(db.DateTime, server_default=func.now())
    updated_at = db.Column(db.DateTime,server_default=func.now(),onupdate=func.now())
    deleted_at = db.Column(db.DateTime)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    post_id = db.Column(db.Integer, db.ForeignKey('posts.id'), nullable=False)
    text = db.Column(db.String(150), nullable=False)

    user = db.relationship("Users")
    post = db.relationship("Posts")

    def __str__(self):
        return '<comments {}>'.format(self.user)

    def serialize(self):
        return {
            'id': self.id,
            'user': self.user.first_name,
            'created_at': self.created_at,
            'text': self.text       
        }
