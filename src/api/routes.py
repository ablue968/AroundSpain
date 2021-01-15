"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
import hashlib
import hmac
import jwt

from flask import Flask, request, jsonify, url_for, Blueprint, abort
from datetime import datetime

from api.models import db, Users, Cities, Posts, Comments, Likes
from api.utils import generate_sitemap, APIException


api = Blueprint('api', __name__)

MAC = 'exaEpDM4cfeMKeeA248MwRp8RZ5hue9u'
JWT_SECRET = 'D8Z4TZMZ+smzRAYX^RgYDfcN@8U=+U6c'

## FUNCIONES

##GET ALL 

def get_a_list_of(models):
    listed_model = []

    for model in models.query.filter_by(deleted_at=None).all():
        listed_model.append(model.serialize())
    return jsonify(listed_model), 200

##GET BY ID

def get_one_or_404(models,id):
    result_by_id = models.query.get(id)

    if not result_by_id:
        abort(404)

    if  result_by_id.deleted_at:
        abort(410, f"{result_by_id} has been deleted")
     
    return jsonify(result_by_id.serialize()), 200 

## POST

def do_a_post(models, payload=None):
    payload = payload or request.get_json()

    required = models.serialize_required(models).keys()
    testing = models.serialize_all_types(models)
    
    for field in required:
        if field not in payload or payload[field] is None:
            abort(422,f"Error: missing {field}")    
    
    for key, value in testing.items():
        print(payload[key],key)
        if payload[key] in payload and payload[key] is not None and not isinstance(payload[key],value): #CORREGUIR ESTO
            abort(422,f"Error in {key}'s data type")
    
    post = models(**payload)
    db.session.add(post)
    db.session.commit()
    return jsonify(post.serialize()), 201

## DELETE BY ID

def delete_element(Models,id):
    model = Models.query.filter_by(id=id, deleted_at=None).first()

    if not model:
        return "Not found", 404
    
    model.deleted_at = datetime.utcnow()
    data = model.serialize()
    db.session.delete(model)
    db.session.commit()

    return jsonify(f"This {model} has been eliminated successfully", data), 200
    
## PUT  
def validation_and_payload(Models): 
    model = Models.query.get(id)

    if not user:
        return f"{model} not found", 404
        
    payload = request.get_json()

    required = models.notebook(models).keys()

    for field in required:
        if field in payload :
            model.field = payload[field]

    db.session.add(model)
    db.session.commit()

    return jsonify(model.serialize()), 201


def authorization_user():
    authorization = request.headers['Authorization']
    
    if not authorization:
        abort(403)

    token = authorization[7:]
    secret = JWT_SECRET.encode('utf-8')
    algo = "HS256"

    payload = jwt.decode(token, secret, algorithms=[algo])
    user = Users.query.filter_by(email=payload['sub'], deleted_at=None).first() # Recoge la información de la base de datos del usuario, .first muestra el primero que coincida y no busca mas

    return user

## AQUI ESTA EL TEST
@api.route('/test', methods=['GET'])
def test():
    user = authorization_user()
    return jsonify(user.serialize()),200


##AQUI ESTA EL LOGIN
@api.route('/login', methods=['POST'])
def login():
    payload = request.get_json()

    email = payload['email']
    password = payload['password']

    user = Users.query.filter_by(email=email, deleted_at=None).first()

    if not user:
        return "Forbiden", 403

    key = MAC.encode('utf-8')
    msg = password.encode('utf-8')
    algo = hashlib.sha512

    hashed_password = hmac.new(key, msg, algo).hexdigest()
    
    if hashed_password != user.password:
        return "Forbiden", 403

# El correo electronico y la contraseña coinciden, conviene que no sean muy pesadas. (no utilizar mucha información)
    payload = {"sub": user.email}
    secret = JWT_SECRET.encode('utf-8')
    algo = "HS256"

    token =  jwt.encode(payload, secret, algorithm=algo)
    #toke = jwt.encoded_jwt = jwt.encode({"some": "payload"}, "secret", algorithm="HS256")

    return jsonify({'token': token}), 200




# ******************************----TABLE USERS------******************************
@api.route('/users', methods=['GET'])
def handle_list_user():
    return get_a_list_of(Users)

@api.route('/users/<int:id>', methods=['GET'])
def handle_get_user(id):
    return get_one_or_404(Users,id)


@api.route('/users', methods=['POST'])
def handle_create_user():
    payload = request.get_json()

    key = MAC.encode('utf-8')
    msg = payload['password'].encode('utf-8')
    algo = hashlib.sha512

    payload['password'] = hmac.new(key, msg, algo).hexdigest()

    return do_a_post(Users, payload)


@api.route('/users/<int:id>', methods=['PUT'])
def handle_update_user(id):
    return validation_and_payload(Users)

@api.route('/users/<int:id>', methods=['DELETE'])
def handle_delete_user(id):
    return delete_element(Users,id)



# ******************************----TABLE CITIES------******************************
@api.route('/cities', methods=['GET'])
def handle_list_cities():
    return get_a_list_of(Cities)

@api.route('/cities/<int:id>', methods=['GET'])
def handle_get_city(id):
    return  get_one_or_404(Cities,id)

@api.route('/cities', methods=['POST'])
def handle_create_city():
    return do_a_post(Cities)

@api.route('/cities/<int:id>', methods=['PUT'])
def handle_update_city(id):
    return validation_and_payload(Cities)

@api.route('/cities/<int:id>', methods=['DELETE'])
def handle_delete_city(id):
    return delete_element(Cities,id)




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
    user = authorization_user()
    payload = request.get_json()
    return do_a_post(Posts,payload), 201



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