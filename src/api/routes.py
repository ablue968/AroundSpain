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
        
    payload = request.get_json()   #no se actualiza la password por acá

    if "first_name" in payload:
        user.first_name = payload["first_name"]
    
    if  "last_name" in payload: 
         user.last_name = payload["last_name"]
    
    if  "email" in payload:
         user.email = payload["email"]
    
    if  "country" in payload:
         user.country = payload["country"]
    
    if  "language" in payload:
         user.language = payload["language"] 
    
    if  "avatar" in payload:
         user.avatar = payload["avatar"]

    db.session.add(user)
    db.session.commit()

    return jsonify(user.serialize()), 200

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
def handle_get_city(id):
    city = Cities.query.get_or_404(id)
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
    if  "image" in payload: 
         city.image = payload["image"]
    if  "population" in payload:
         city.population = payload["population"]
    if  "cost_of_living" in payload:
         city.cost_of_living = payload["cost_of_living"]
    if  "sunny" in payload:
         city.sunny = payload["sunny"]
    if  "windy" in payload:
         city.windy = payload["windy"]
    if  "rainy" in payload:
         city.rainy = payload["rainy"]
    if  "lowest_temp" in payload:
         city.lowest_temp = payload["lowest_temp"]
    if  "average_temp" in payload:
         city.average_temp = payload["average_temp"]
    if  "rental_offer" in payload:
         city.rental_offer = payload["rental_offer"]    
    
    db.session.add(city)
    db.session.commit()

    return jsonify(city.serialize()), 200

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
@api.route('/cities/<int:id>/posts', methods=['GET']) #listado de comentarios para cada ciudad
def handle_list_posts(id):
#     city = Cities.query.get(id)

#     if not city:
#         return "City not found", 404

#     posts = []
#     for post in city.posts:
#         posts.append(post.serialize())
        
#     return jsonify(posts), 200

    posts = []

    cursor = Posts.query.filter_by(city_id=id) # Filtro por city_id
    cursor = cursor.filter_by(delete_at=None) # Filtro por deleted_at
    cursor = cursor.order_by(Posts.update_at.desc()) # Ordeno por update_at descendente

    for post in cursor.all():
        posts.append(post.serialize())

    return jsonify(posts), 200

@api.route('/posts/<int:id>', methods=['GET'])
def handle_get_post():
    post = Posts.query.get(id)

    if not post:
        return "Post not found", 404

    return  jsonify(post.serialize()), 200

@api.route('/posts', methods=['POST'])
def handle_create_posts():
    payload = request.get_json()
    post = Posts(**payload)

    db.session.add(post)
    db.session.commit()
    return jsonify(post.serialize()), 201

@api.route('/posts/<int:id>', methods=['PUT'])
def handle_update_posts(id):
    post = Posts.query.get(id)

    if not post:
        return "Post not found", 404
        
    payload = request.get_json()

    if "text" in payload:
        post.text = payload["text"]  
    
    db.session.add(post)
    db.session.commit()

    return jsonify(city.serialize()), 201

@api.route('/posts/<int:id>', methods=['DELETE'])
def handle_delete_posts(id):
    post = Posts.query.get(id)

    if not post:
        return "Post not found", 404
    
    data = post.serialize()

    db.session.delete(post)
    db.session.commit()

    return jsonify(data), 200




# ******************************----TABLE LIKES------******************************
@api.route('/likes', methods=['GET'])
def handle_list_likes():
    likes = []
    for like in Likes.query.all():
        likes.append(like.serialize())
    return jsonify(likes), 200

@api.route('/likes/<int:id>', methods=['GET'])
def handle_get_like():
    like = Likes.query.get(id)

    if not like:
        return "Like not found", 404

    return  jsonify(like.serialize()), 200

@api.route('/likes', methods=['POST'])
def handle_create_likes():
    payload = request.get_json()
    like = Likes(**payload)

    db.session.add(like)
    db.session.commit()
    return jsonify(like.serialize()), 201

@api.route('/likes/<int:id>', methods=['PUT'])
def handle_update_likes(id):
    like = Likes.query.get(id)

    if not like:
        return "Like not found", 404
        
    payload = request.get_json()

    if "text" in payload:    #tengo duda con este.. debería de ser poner y quitar like.. no hay nada más que modificar
        like.text = payload["text"]  
    
    db.session.add(post)
    db.session.commit()

    return jsonify(like.serialize()), 201

@api.route('/likes/<int:id>', methods=['DELETE'])
def handle_delete_likes(id):
    like = Likes.query.get(id)

    if not like:
        return "Post not found", 404
    
    data = like.serialize()

    db.session.delete(like)
    db.session.commit()

    return jsonify(data), 200




    # ******************************----TABLE COMMENTS------******************************
@api.route('/comments', methods=['GET'])
def handle_list_comments():
    comments = []
    for comment in Comments.query.all():
        comments.append(comment.serialize())
    return jsonify(comments), 200

@api.route('/comments/<int:id>', methods=['GET'])
def handle_get_comments():
    comment = Comments.query.get(id)

    if not comment:
        return "Comment not found", 404

    return  jsonify(comment.serialize()), 200

@api.route('/comments', methods=['POST'])
def handle_create_comments():
    payload = request.get_json()
    comment = Comments(**payload)

    db.session.add(comment)
    db.session.commit()
    return jsonify(comment.serialize()), 201

@api.route('/comments/<int:id>', methods=['PUT'])
def handle_update_comments(id):
    comment = Comments.query.get(id)

    if not comment:
        return "Comment not found", 404
        
    payload = request.get_json()

    if "text" in payload:    
        comment.text = payload["text"]  
    
    db.session.add(comment)
    db.session.commit()

    return jsonify(like.serialize()), 201

@api.route('/comments/<int:id>', methods=['DELETE'])
def handle_delete_comments(id):
    comment = Comments.query.get(id)

    if not comments:
        return "Comment not found", 404
    
    data = comment.serialize()

    db.session.delete(comment)
    db.session.commit()

    return jsonify(data), 200