from flask_socketio import SocketIO, emit
import os


# configure cors_allowed_origins

origins = "*"

# initialize your socket instance
socketio = SocketIO(cors_allowed_origins=origins)


# handle chat messages
@socketio.on("DM")
def handle_chat(data):
    emit("DM", data, broadcast=True)
@socketio.on("RM")
def handle_chat(data):
    emit("RM", data, broadcast=True)
