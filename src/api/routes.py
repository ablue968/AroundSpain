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



