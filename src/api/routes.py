"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, Users
from api.utils import generate_sitemap, APIException


api = Blueprint('api', __name__)

#@api.route('/users', methods=['GET'])
#def handle_list_user():
#
#    response_body = {
#        "message": "Hello! I'm a message that came from the backend"
#    }
#
#    return jsonify(response_body), 200




# ******************************----TABLE USERS------******************************
@api.route('/users', methods=['GET'])
def handle_list_user():
    return "Lista de Usuarios JC"

@api.route('/users/<int:id>', methods=['GET'])
def handle_get_user():
    return  "Get #{}".format(id)

@api.route('/users', methods=['POST'])
def handle_create_user():
    payload = request.get_json()
    print(payload)
    return "Usuario creado JC"

@api.route('/users/<int:id>', methods=['PUT'])
def handle_update_user(id):
    payload = request.get_json()
    print(payload)
    return "Usuario actualizado JC {} user ".format(id)

@api.route('/users/<int:id>', methods=['DELETE'])
def handle_delete_user(id):
    return "Usuario eliminado JC"          #"Deleted #{} user".format(id)





# ******************************----TABLE CITIES------******************************
@api.route('/cities', methods=['GET'])
def handle_list_cities():
    return "Lista de CIUDADES JC"

@api.route('/cities/<int:id>', methods=['GET'])
def handle_get_city():
    return  "Ciudad con ID #{}".format(id)+'************ JC'

@api.route('/cities', methods=['POST'])
def handle_create_city():
    payload = request.get_json()
    print(payload)
    return "Ciudad creada JC   **************"

@api.route('/cities/<int:id>', methods=['PUT'])
def handle_update_city(id):
    payload = request.get_json()
    print(payload)
    return "Ciudad actualizado JC {} CITY ".format(id)

@api.route('/cities/<int:id>', methods=['DELETE'])
def handle_delete_city(id):
    return "Ciudad Elminada JC   ******"          #"Deleted #{} user".format(id)





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