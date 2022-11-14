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

@server_routes.route('/current')
@login_required
def current_servers():
    all_servers = Server.query.filter_by(is_dm= False)
    dicts= [server.to_dict_regulars() for server in all_servers]
    user = request.current_user
    user= user.to_dict()
    to_return= []
    for server in dicts:
        if user in server["users"]:
            to_return.append(server)
    return json.dumps(to_return)

@server_routes.route('/<int:server_id>')
def single_server(server_id):
    server= Server.query.get(server_id)
    if (server.is_dm==True):
        return server.to_dict_dms()
    else:
        return server.to_dict_regulars()


@server_routes.route('/new', methods= ["POST"])
@login_required
def add_server():
    form= ServerForm()
    data= form.data
    user_id = current_user.id

    form['csrf_token'].data = request.cookies['csrf_token']
    # "is_dm" : false because route is only for regular servers
    new_server= Server(name= data["name"], img= data["img"], description= data["description"], is_dm= False, owner_id= user_id)
    db.session.add(new_server)
    db.session.commit()
    return json.dumps(new_server.to_dict_regulars())


@server_routes.route('/<int:server_id>', methods= ["POST"])
@login_required
def update_server(server_id):
    form= ServerForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        data= form.data
        server= Server.query.get(server_id)
        server.name= data["name"]
        server.img= data["img"]
        db.session.commit()
        return "Successfully updated"
    else:
        return form.errors


@server_routes.route('/<int:server_id>', methods= ["DELETE"])
@login_required
def delete_server(server_id):
    server= Server.query.get(server_id)
    db.session.delete(server)
    db.session.commit()
    return "Successfully deleted"
