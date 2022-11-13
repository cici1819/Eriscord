from flask import Blueprint, request
from flask_login import current_user, login_user, logout_user, login_required
from ..models import Channel, db
from ..forms import ChannelForm


channel_routes = Blueprint('channels', __name__)


@channel_routes.route('/<int:channel_id>')
@login_required
def get_channel_by_id(channel_id):
    channel = Channel.query.get(channel_id)

    if channel:
        return channel.to_dict_messages()
    else:
        return {"errors": "Channel couldn't be found"}, 404

    # return channel.to_dict_messages() if channel else {"errors": "Channel couldn't be found"}, 404



@channel_routes.route('/new', methods= ["POST"])
@login_required
def add_channel():
    # args = request.args
    # console.log("args!!!!", args)
    print ('here')
    form= ChannelForm()
    form['csrf_token'].data = request.cookies['csrf_token']

    if form.validate_on_submit():
        new_channel= Channel(
            name= form.data["name"],
            topic= form.data["topic"],
            server_id = form.data["server_id"]
            )
        db.session.add(new_channel)
        db.session.commit()
        return {"messages": "Channel created successfully"}, 200
    else:
        return form.errors



@channel_routes.route('/<int:channel_id>', methods=['POST'])
@login_required
def edit_channel_by_id(channel_id):
    channel_id = 20
    channel = Channel.query.get(channel_id)
    print('herre!!!!!!!')

    if channel:
        form = ChannelForm()
        form['csrf_token'].data = request.cookies['csrf_token']
        if form.validate_on_submit:
            form.populate_obj(channel)
            db.session.commit()
        return channel.to_dict_messages(), 200
    else:
        return {"errors": "Channel couldn't be found"}, 404




@channel_routes.route('/<int:channel_id>', methods=['DELETE'])
@login_required
def delete_channel_by_id(channel_id):
    channel = Channel.query.get(channel_id)

    if channel:
        db.session.delete(channel)
        db.session.commit()
        return {"messages": "Channel delete successfully"}, 200
    else:
        return {"errors": "Channel couldn't be found"}, 404
