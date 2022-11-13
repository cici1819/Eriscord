from .db import db, environment, SCHEMA, add_prefix_for_prod


class Channel(db.Model):
    __tablename__ = 'channels'

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(50), nullable=False)
    server_id = db.Column(db.Integer, db.ForeignKey(
        'servers.id'), nullable=False)
    topic = db.Column(db.String(255), nullable=False)
    server_c = db.relationship(
        "Server", back_populates="channel_s")
    message_c = db.relationship(
        "Message", back_populates="channel_m", cascade='all, delete')

    # stop case:
    def to_dict(self):
        channel_dict = {
            "id": self.id,
            "name": self.name,
            "server_id": self.server_id,
            "topic": self.topic,
        }
        return channel_dict

    def to_dict_messages(self):
        channel_messages_dict = {
            "id": self.id,
            "name": self.name,
            "server_id": self.server_id,
            "topic": self.topic,
            "messages": [message.to_dict() for message in self.message_c],
        }
        return channel_messages_dict

    def __repr__(self):
        return f'<Channel model: id={self.id}, name={self.name}, server_id={self.server_id}, topic={self.topic}>'
