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


@api.route('/hello', methods=['POST', 'GET'])
def handle_hello():

    response_body = {
        "message": "Hello! I'm a message that came from the backend"
    }

    return jsonify(response_body), 200

@api.route('/Users', methods=['GET'])
def handle_list_user():

    return jsonify(usuarios), 200



@api.route('/Users/<int:id>', methods=['GET'])
def handle_get_user():
    return "Get user {}".format(id)



@app.route('/Users/<int:id>', methods=['POST'])
def get_user():
    new_user = user.name
    if not new_user:
        return "member not found",400
    else:
        return jsonify({'done': True}),200