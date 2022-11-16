from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField, SubmitField
from wtforms.validators import DataRequired,ValidationError
# Temporary form for testing, will update
class MessageForm(FlaskForm):
    content = StringField('SERVER NAME', validators=[DataRequired()])
    channel_id= IntegerField("ChannelID")
    server_id= IntegerField("SERVERID")
    submit = SubmitField('Create')
