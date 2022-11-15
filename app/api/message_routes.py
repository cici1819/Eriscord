from flask import Blueprint, jsonify, session, request
from app.models import Message,Message, db
from app.forms import MessageForm, DmForm
from datetime import datetime
import json
from flask_login import current_user, login_user, logout_user, login_required

message_routes = Blueprint('messages', __name__)


def validation_errors_to_error_messages(validation_errors):
    """
    Simple function that turns the WTForms validation errors into a simple list
    """
    errorMessages = []
    for field in validation_errors:
        for error in validation_errors[field]:
            errorMessages.append(f'{field} : {error}')
    return errorMessages


@message_routes.route('/channels/<int:channel_id>')
def regular_messages(channel_id):
    id = channel_id
    channel_messages = Message.query.filter_by(channel_id=id)
    return json.dumps({"messages": [message.to_dict() for message in channel_messages]})


@message_routes.route('/channels/<int:channel_id>', methods=["POST"])
# @login_required
def add_channel_message(channel_id):
    form= MessageForm()
    data= form.data
    sender_id = current_user.id
    current_time= datetime.now()
    form['csrf_token'].data = request.cookies['csrf_token']
    # "is_dm" : false because route is only for regular messages
    new_message= Message(content= data["content"], channel_id= data["channel_id"], server_id= data["server_id"], sender_id= sender_id, created_at=current_time)
    db.session.add(new_message)
    db.session.commit()
    return json.dumps(new_message.to_dict())


@message_routes.route('/dms/<int:server_id>', methods=["POST"])
# @login_required
def add_dm_message(server_id):
    form= DmForm()
    data= form.data
    # sender_id = current_user.id
    current_time= datetime.now()
    form['csrf_token'].data = request.cookies['csrf_token']
    # "is_dm" : false because route is only for regular messages
    new_message= Message(content= data["content"], server_id= server_id, sender_id= 1, created_at=current_time)
    db.session.add(new_message)
    db.session.commit()
    return json.dumps(new_message.to_dict())


@message_routes.route('/dms/<int:server_id>')
def dm_messages(server_id):
    id = server_id
    server_messages = Message.query.filter_by(message_id=id)
    return json.dumps({"messages": [message.to_dict() for message in server_messages]})
