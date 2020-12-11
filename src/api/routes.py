"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, Users, Cities, Posts, Comments, Likes
from api.utils import generate_sitemap, APIException


api = Blueprint('api', __name__)

# ******************************----TABLE USERS------******************************
@api.route('/users', methods=['GET'])
def handle_list_user():
    users = []
    for user in Users.query.all():
        users.append(user.serialize())
    return jsonify(users), 200

@api.route('/users/<int:id>', methods=['GET'])
def handle_get_user(id):
    user = Users.query.get(id)

    if not user:
        return "User not found", 404

    return  jsonify(user.serialize()), 200

@api.route('/users', methods=['POST'])
def handle_create_user():
    payload = request.get_json()
    user = Users(**payload)

    db.session.add(user)
    db.session.commit()
    return jsonify(user.serialize()), 201

@api.route('/users/<int:id>', methods=['PUT'])
def handle_update_user(id):
    user = Users.query.get(id)

    if not user:
        return "User not found", 404
        
    payload = request.get_json()

    if "first_name" in payload:
        user.first_name = payload["first_name"]
    elif  "last_name" in payload: 
         user.last_name = payload["last_name"]
    elif  "email" in payload:
         user.email = payload["email"]
    elif  "country" in payload:
         user.country = payload["country"]
    elif  "language" in payload:
         user.language = payload["language"]
    elif  "avatar" in payload:
         user.avatar = payload["avatar"]

    db.session.add(user)
    db.session.commit()

    return jsonify(user.serialize()), 201

@api.route('/users/<int:id>', methods=['DELETE'])
def handle_delete_user(id):
    user = Users.query.get(id)

    if not user:
        return "User not found", 404
    
    data = user.serialize()

    db.session.delete(user)
    db.session.commit()

    return jsonify(data), 200

# ******************************----TABLE CITIES------******************************
@api.route('/cities', methods=['GET'])
def handle_list_cities():
    cities = []
    for city in Cities.query.all():
        cities.append(city.serialize())
    return jsonify(cities), 200

@api.route('/cities/<int:id>', methods=['GET'])
def handle_get_city():
    city = Cities.query.get(id)

    if not city:
        return "City not found", 404

    return  jsonify(city.serialize()), 200

@api.route('/cities', methods=['POST'])
def handle_create_city():
    payload = request.get_json()
    city = Cities(**payload)

    db.session.add(city)
    db.session.commit()
    return jsonify(city.serialize()), 201

@api.route('/cities/<int:id>', methods=['PUT'])
def handle_update_city(id):
    city = Cities.query.get(id)

    if not city:
        return "City not found", 404
        
    payload = request.get_json()

    if "city_name" in payload:
        city.city_name = payload["city_name"]
    elif  "image" in payload: 
         city.image = payload["image"]
    elif  "population" in payload:
         city.population = payload["population"]
    elif  "cost_of_living" in payload:
         city.cost_of_living = payload["cost_of_living"]
    elif  "sunny" in payload:
         city.sunny = payload["sunny"]
    elif  "windy" in payload:
         city.windy = payload["windy"]
    elif  "rainy" in payload:
         city.rainy = payload["rainy"]
    elif  "lowest_temp" in payload:
         city.lowest_temp = payload["lowest_temp"]
    elif  "average_temp" in payload:
         city.average_temp = payload["average_temp"]
    elif  "rental_offer" in payload:
         city.rental_offer = payload["rental_offer"]    
    
    db.session.add(city)
    db.session.commit()

    return jsonify(city.serialize()), 201

@api.route('/cities/<int:id>', methods=['DELETE'])
def handle_delete_city(id):
    city = Cities.query.get(id)

    if not city:
        return "City not found", 404
    
    data = city.serialize()

    db.session.delete(city)
    db.session.commit()

    return jsonify(data), 200


# ******************************----TABLE POSTS------******************************
@api.route('/posts', methods=['GET'])
def handle_list_posts():
    return "*****Lista de POST JC*****"

@api.route('/posts/<int:id>', methods=['GET'])
def handle_get_post():
    return  "*****POST con ID #{}".format(id)+'******JC'

@api.route('/posts', methods=['POST'])
def handle_create_posts():
    payload = request.get_json()
    print(payload)
    return "***** POST creada JC   **************"

@api.route('/posts/<int:id>', methods=['PUT'])
def handle_update_posts(id):
    payload = request.get_json()
    print(payload)
    return "***** POST actualizado JC {} POST ".format(id)

@api.route('/posts/<int:id>', methods=['DELETE'])
def handle_delete_posts(id):
    return "****** POST Elminada JC   ******"          #"Deleted #{} user".format(id)





# ******************************----TABLE LIKES------******************************
@api.route('/likes', methods=['GET'])
def handle_list_likes():
    return "*****Lista de LIKES JC*****"

@api.route('/likes/<int:id>', methods=['GET'])
def handle_get_like():
    return  "*****LIKE con ID #{}".format(id)+'******JC'

@api.route('/likes', methods=['POST'])
def handle_create_likes():
    payload = request.get_json()
    print(payload)
    return "***** LIKE creada JC   **************"

@api.route('/likes/<int:id>', methods=['PUT'])
def handle_update_likes(id):
    payload = request.get_json()
    print(payload)
    return "***** LIKES actualizado JC {} POST ".format(id)

@api.route('/likes/<int:id>', methods=['DELETE'])
def handle_delete_likes(id):
    return "****** LIKES Elminada JC   ******"          #"Deleted #{} user".format(id)





    # ******************************----TABLE COMMENTS------******************************
@api.route('/comments', methods=['GET'])
def handle_list_comments():
    return "*****Lista de COMENTARIOS JC*****"

@api.route('/comments/<int:id>', methods=['GET'])
def handle_get_comments():
    return  "*****LIKE con ID #{}".format(id)+'******JC'

@api.route('/comments', methods=['POST'])
def handle_create_comments():
    payload = request.get_json()
    print(payload)
    return "***** LIKE creada JC   **************"

@api.route('/comments/<int:id>', methods=['PUT'])
def handle_update_comments(id):
    payload = request.get_json()
    print(payload)
    return "***** LIKES actualizado JC {} POST ".format(id)

@api.route('/comments/<int:id>', methods=['DELETE'])
def handle_delete_comments(id):
    return "****** LIKES Elminada JC   ******"          #"Deleted #{} user".format(id)