"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, Users, Cities, Posts, Comments, Likes
from api.utils import generate_sitemap, APIException


api = Blueprint('api', __name__)

## FUNCIONES
def get_a_list_of(models):
    listed_model = []

    for element in models.query.all():
        listed_model.append(element.serialize())
    return jsonify(listed_model)

def get_one_or_404(models,id):
    result_by_id = models.query.get(id)

    if not result_by_id:
        return "<models> not found", 404

    return jsonify(result_by_id.serialize()), 200

# Este es el post y esta cambiado en todas las tablas
def do_a_post(models):
    payload = request.get_json()
    post = models(**payload)

    db.session.add(post)
    db.session.commit()
    return jsonify(post.serialize()), 201

# Este esta hecho pero me queda probarlo, me ha cascado un par de veces y me estoy pegando con el
def method_delete(Models,id):
    model = Models.query.get(id)
    if not model:
        return "User not found", 404

        data = model.serialize()

        db.session.delete(model)
        db.session.commit()

    return jsonify(data)

#PUT ****falta tocar jaja
def validation_and_payload(): 
    model = models.query.get(id)

    if not user:
        return "<models> not found", 404
        
    payload = request.get_json()




# ******************************----TABLE USERS------******************************
@api.route('/users', methods=['GET'])
def handle_list_user():
    return get_a_list_of(Users)

@api.route('/users/<int:id>', methods=['GET'])
def handle_get_user(id):
    return get_one_or_404(Users,id)


@api.route('/users', methods=['POST'])
def handle_create_user():

    return do_a_post(Users)

@api.route('/users/<int:id>', methods=['PUT'])
def handle_update_user(id):
    user = Users.query.get(id)

    if not user:
        return "User not found", 404
        
    payload = request.get_json()

          
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
    return get_a_list_of(Cities)




@api.route('/cities/<int:id>', methods=['GET'])
def handle_get_city(id):
    city = Cities.query.get_or_404(id)
    return  jsonify(city.serialize()), 200





@api.route('/cities', methods=['POST'])
def handle_create_city():
    
    return do_a_post(Cities), 201




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
    return method_delete(cities,id), 200


# ******************************----TABLE POSTS------******************************
@api.route('/cities/<int:id>/posts', methods=['GET']) #listado de comentarios para cada ciudad
def handle_list_posts(id):
    city = Cities.query.get(id)

    if not city:
        return "City not found", 404

    posts = []
    for post in city.posts:
        posts.append(post.serialize())
        
    return jsonify(posts), 200

    # posts = []

    # cursor = Posts.query.filter_by(city_id=id) # Filtro por city_id
    # cursor = cursor.filter_by(delete_at=None) # Filtro por deleted_at
    # cursor = cursor.order_by(Posts.update_at.desc()) # Ordeno por update_at descendente

    # for post in cursor.all():
    #     posts.append(post.serialize())

    return jsonify(posts), 200

#GET BY ID
@api.route('/posts/<int:id>', methods=['GET'])
def handle_get_post(id):
    post = Posts.query.get(id)

    if not post:
        return "Post not found", 404

    return  jsonify(post.serialize()), 200

    if not post:
        return "Post not found", 404

    return  jsonify(post.serialize()), 200

    
# POST de posts
@api.route('/posts', methods=['POST'])
def handle_create_posts():

    return do_a_post(Posts), 201



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
def handle_get_like(id):
    like = Likes.query.get(id)

    if not like:
        return "Like not found", 404

    return  jsonify(like.serialize()), 200

@api.route('/likes', methods=['POST'])
def handle_create_likes():

    return do_a_post(Likes), 201

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
def handle_get_comments(id):
    comment = Comments.query.get(id)

    if not comment:
        return "Comment not found", 404

    return  jsonify(comment.serialize()), 200

@api.route('/comments', methods=['POST'])
def handle_create_comments():

    return do_a_post(Comments), 201


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