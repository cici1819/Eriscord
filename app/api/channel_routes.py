from flask import Blueprint
from flask_login import current_user, login_user, logout_user, login_required
from ..models import Channel, db
from ..forms import ChannelForm


channel_routes = Blueprint('channels', __name__)


@channel_routes.route('/<int:channel_id>')
@login_required
def get_channel_by_id(channel_id):
    channel = Channel.query.get(channel_id)

    return channel.to_dict(), 200 if channel else {"errors": "Channel couldn't be found"}, 404



@channel_routes.route('/new', methods= ["POST"])
def add_channel():
    # args = request.args
    # console.log("args!!!!", args)
    
    form= ChannelForm()
    if form.validate_on_submit():
        new_channel= Channel(
            name= form.data["name"],
            topic= form.data["topic"]
            )
        db.session.add(new_channel)
        db.session.commit()
        return {"messages": "Channel created successfully"}, 200
    else:
        return form.errors



@channel_routes.route('/<int:channel_id>', methods=['POST'])
@login_required
def edit_channel_by_id(channel_id):
    channel = Channel.query.get(channel_id)

    if channel:
        form = ChannelForm()
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
