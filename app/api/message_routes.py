from flask import Blueprint, jsonify, session, request
from app.models import Server,Message, db
from app.forms import ServerForm
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
@message_routes.route('/dms/<int:server_id>')
def dm_messages(channel_id):
    id = channel_id
    channel_messages = Message.query.filter_by(server_id=id)
    return json.dumps({"messages": [message.to_dict() for message in channel_messages]})
