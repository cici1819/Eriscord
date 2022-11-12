from .db import db, environment, SCHEMA, add_prefix_for_prod
from .server_member import server_member


class Server(db.Model):
    __tablename__ = 'servers'

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(50), nullable=False)
    owner_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    description = db.Column(db.String(255),default = "DM",nullable=False)
    img = db.Column(db.String(100),default = "https://logos-world.net/wp-content/uploads/2020/12/Discord-Logo.png",nullable=False)
    is_dm = db.Column(db.Boolean, nullable=False)


    user_s = db.relationship("User", back_populates="server_u")
    # channel_s = db.relationship(
    #     "Channel", back_populates="server_c", cascade='all, delete')
    # message_s = db.relationship(
    #     "Message", back_populates="server_m", cascade='all, delete')

    server_server_members = db.relationship(
        "User",
        secondary=server_member,
        back_populates="user_server_member",
        cascade="all, delete"
    )

# stop case:
    def to_dict(self):
        server_dict = {
            "id": self.id,
            "name": self.name,
            "owner_id": self.owner_id,
            "description": self.description,
            "img": self.img,
            "is_dm": self.is_dm,
        }
        return server_dict

    def to_dict_dms(self):
        server_dm_dict = {
            "id": self.id,
            "name": self.name,
            "owner_id": self.owner_id,
            "description": self.description,
            "img": self.img,
            "is_dm": self.is_dm,
            # "messages": [message.to_dict() for message in self.message_s]
        }
        return server_dm_dict

    def to_dict_regulars(self):
        server_regular_dict = {
            "id": self.id,
            "name": self.name,
            "owner_id": self.owner_id,
            "description": self.description,
            "img": self.img,
            "is_dm": self.is_dm,
            # "channels": [channel.to_dict() for channel in self.channel_s],
            "users": [user.to_dict() for user in self.user_s]
        }
        return server_regular_dict

    def __repr__(self):
        return f'<Server model: id={self.id}, name={self.name}, owner_id={self.owner_id}, description={self.description}, img={self.img}, is_dm={self.is_dm}>'
