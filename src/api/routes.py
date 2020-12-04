"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User
from api.utils import generate_sitemap, APIException

api = Blueprint('api', __name__)

usuarios = [{
    "id":"1",
    "name": "Pedro",
    "lastname": "Gomez"
},{
    "id":"2",
    "name": "Jose",
    "lastname": "Perez"
}]


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

    return jsonify(usuarios), 200



@api.route('/users/<int:id>', methods=['GET'])
def handle_get_user():
    return "Get #{}"user.format(id)



@api.route('/users/<int:id>', methods=['POST'])
def handle_create_user():
    payload = request.get_json()
    print(payload)
    return "create user"