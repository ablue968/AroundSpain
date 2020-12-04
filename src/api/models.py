from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class Users(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    created_at = db.Column(db.DateTime, nullable=False)
    update_at = db.Column(db.DateTime, nullable=False)
    delete_at = db.Column(db.DateTime)
    first_name = db.Column(db.String(50), nullable=False)
    last_name = db.Column(db.String(50))
    email = db.Column(db.String(120), unique=True)
    password = db.Column(db.String(80), nullable=False)
    country = db.Column(db.String(50), nullable=False)
    language = db.Column(db.String(50), nullable=False)
    avatar = db.Column(db.String(50))


class Cities(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    created_at = db.Column(db.DateTime, nullable=False)
    update_at = db.Column(db.DateTime, nullable=False)
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

class Posts(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    created_at = db.Column(db.DateTime, nullable=False)
    update_at = db.Column(db.DateTime, nullable=False)
    delete_at = db.Column(db.DateTime)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    city_id = db.Column(db.Integer, db.ForeignKey('cities.id'), nullable=False)
    text = db.Column(db.String(150), nullable=False)

class Likes(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    created_at = db.Column(db.DateTime, nullable=False)
    update_at = db.Column(db.DateTime, nullable=False)
    delete_at = db.Column(db.DateTime)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    city_id = db.Column(db.Integer, db.ForeignKey('cities.id'), nullable=False)
       
class Comments(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    created_at = db.Column(db.DateTime, nullable=False)
    update_at = db.Column(db.DateTime, nullable=False)
    delete_at = db.Column(db.DateTime)
    user_id = db.Column(db.Integer, db.ForeignKey('users_id'), nullable=False)
    post_id = db.Column(db.Integer, db.ForeignKey('posts_id'), nullable=False)
    text = db.Column(db.String(150), nullable=False)

 



    def __repr__(self):
        return '<User %r>' % self.username

    def serialize(self):
        return {
            "id": self.id,
            "email": self.email,
            # do not serialize the password, its a security breach
        }