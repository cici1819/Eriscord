from .db import db, environment, SCHEMA, add_prefix_for_prod

server_member = db.Table(
    'server_members',
    db.Model.metadata,
    db.Column('users_id', db.Integer, db.ForeignKey('users.id'), primary_key=True ),
    db.Column('servers_id', db.Integer, db.ForeignKey('servers.id'), primary_key=True )
)
