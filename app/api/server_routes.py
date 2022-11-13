from flask import Blueprint, jsonify, session, request
from app.models import Server, db
from app.forms import ServerForm
import json
from flask_login import current_user, login_user, logout_user, login_required

server_routes = Blueprint('server', __name__)


def validation_errors_to_error_messages(validation_errors):
    """
    Simple function that turns the WTForms validation errors into a simple list
    """
    errorMessages = []
    for field in validation_errors:
        for error in validation_errors[field]:
            errorMessages.append(f'{field} : {error}')
    return errorMessages


@server_routes.route('/regular')
def all_servers():
    all_servers = Server.query.filter_by(is_dm= False)
    return json.dumps({"servers": [server.to_dict_regulars() for server in all_servers]})
@server_routes.route('/dm')
def dm_servers():
    all_servers = Server.query.filter_by(is_dm= True)
    return json.dumps({"servers": [server.to_dict_dms() for server in all_servers]})
# @server_routes.route('/servers/<int:server_id>')
# def single_server(server_id):
#     server= Server.query.get(server_id)
#     return server.to_dict()
# @server_routes.route('/new', methods= ["POST"])
# def add_server():
#     form= ServerForm()
#     data= form.data
#     new_server= Server(name= data["name"], img= data["img"])
#     db.session.add(new_server)
#     db.session.commit()
#     return "Successfully created"
# @server_routes.route('/servers/<int:server_id>', methods= ["PUT"])
# def update_server(server_id):
#     form= ServerForm()
#     data= form.data
#     server= Server.query.get(server_id)
#     server.name= data["name"]
#     server.img= data["img"]
#     db.session.commit()
#     return "Successfully updated"
# @server_routes.route('/servers/<int:server_id>', methods= ["PUT"])
# def update_server(server_id):
#     form= ServerForm()
#     data= form.data
#     server= Server.query.get(server_id)
#     server.name= data["name"]
#     server.img= data["img"]
#     db.session.commit()
#     return "Successfully updated"
# @server_routes.route('/servers/<int:server_id>', methods= ["DELETE"])
# def single_server(server_id):
#     server= Server.query.get(server_id)
#     db.session.delete(server)
#     db.session.commit()
#     return "Successfully deleted"
