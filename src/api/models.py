from flask_sqlalchemy import SQLAlchemy
from sqlalchemy.sql import func

db = SQLAlchemy()

class Users(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    created_at = db.Column(db.DateTime, server_default=func.now())
    update_at = db.Column(db.DateTime,server_default=func.now(),onupdate=func.now())
    delete_at = db.Column(db.DateTime)
    first_name = db.Column(db.String(50), nullable=False)
    last_name = db.Column(db.String(50))
    email = db.Column(db.String(120), unique=True)
    password = db.Column(db.String(80), nullable=False)
    country = db.Column(db.String(50), nullable=False)
    language = db.Column(db.String(50), nullable=False)
    avatar = db.Column(db.String(50))

    def __repr__(self):
        return '<Users %r>' % self.email

    def serialize(self):
        return {
            'id': self.id,
            'first_name':self.first_name,
            'last_name':self.last_name,
            'email':self.email,
            'country':self.country,
            'language':self.language,
            'avatar':self.avatar
        }


class Cities(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    created_at = db.Column(db.DateTime, server_default=func.now())
    update_at = db.Column(db.DateTime,server_default=func.now(),onupdate=func.now())
    delete_at = db.Column(db.DateTime)
    name = db.Column(db.String(50), nullable=False)
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

    def __repr__(self):
        return '<Cities %r>' % self.name

    def serialize(self):
        return {
            'id': self.id,
            'name':self.name,
            'image':self.image,
            'population':self.population,
            'cost_of_living':self.cost_of_living,
            'sunny':self.sunny,
            'humidity':self.humidity,
            'windy':self.windy,
            'rainy':self.rainy,
            'lowest_temp':self.lowest_temp,
            'average_temp':self.average_temp,
            'rental_offer':self.rental_offer
        }

class Posts(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    created_at = db.Column(db.DateTime, server_default=func.now())
    update_at = db.Column(db.DateTime,server_default=func.now(),onupdate=func.now())
    delete_at = db.Column(db.DateTime)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    city_id = db.Column(db.Integer, db.ForeignKey('cities.id'), nullable=False)
    text = db.Column(db.String(150), nullable=False)

class Likes(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    created_at = db.Column(db.DateTime, server_default=func.now())
    update_at = db.Column(db.DateTime,server_default=func.now(),onupdate=func.now())
    delete_at = db.Column(db.DateTime)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    city_id = db.Column(db.Integer, db.ForeignKey('cities.id'), nullable=False)
       
class Comments(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    created_at = db.Column(db.DateTime, server_default=func.now())
    update_at = db.Column(db.DateTime,server_default=func.now(),onupdate=func.now())
    delete_at = db.Column(db.DateTime)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    post_id = db.Column(db.Integer, db.ForeignKey('posts.id'), nullable=False)
    text = db.Column(db.String(150), nullable=False)
 
