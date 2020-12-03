from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class users(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    created_at = db.Column(db.DateTime, default=db.datetime.datebimne.utcnow, nullable=False)
    update_at = db.Column(db.DateTime, default=db.datetime.datebimne.utcnow, nullable=False)
    delete_at = db.Column(db.DateTime, default=db.datetime.datebimne.utcnow, nullable=False)
    first_name = db.Column(db.String(50)
    last_name = db.Column(db.String(50)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(80), unique=False, nullable=False)
    country = db.Column(db.String(50)
    language = db.Column(db.String(50)
    avatar = db.Column(db.String(50)


class cities(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    created_at = db.Column(db.DateTime, default=db.datetime.datebimne.utcnow, nullable=False)
    update_at = db.Column(db.DateTime, default=db.datetime.datebimne.utcnow, nullable=False)
    delete_at = db.Column(db.DateTime, default=db.datetime.datebimne.utcnow, nullable=False)
    name = db.Column(db.String(50)
    image = db.Column(db.String(150)
    population = db.Column(db.Integer)
    population = db.Column(db.Integer)
    cost_of_living = db.Column(db.Integer)
    sunny = db.Column(db.Integer)
    humidity = db.Column(db.Integer)
    windy = db.Column(db.Integer)
    rainy = db.Column(db.Integer)
    lowest_temp = db.Column(db.float)
    highest_temp =db.Column(db.float)
    average_temp = db.Column(db.float)
    rental_offer = db.Column(db.Integer)
       
 
    def __repr__(self):
        return '<User %r>' % self.username

    def serialize(self):
        return {
            "id": self.id,
            "email": self.email,
            # do not serialize the password, its a security breach
        }