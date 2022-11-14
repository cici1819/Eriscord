from flask_wtf import FlaskForm
from wtforms import StringField, SubmitField
from wtforms.validators import DataRequired,ValidationError
from app.models import Channel

# def validate_name(form,field):
#     name = field.data
#     if len(name) <4:
#         raise ValidationError("Please provide a name with at least 4 characters")
#     elif len (name) >50:
#         raise ValidationError("Name need to be less than 50 characters")


# def validate_topic(form,field):
#     topic = field.data
#     if len(topic)<4:
#         raise ValidationError("Please provide a topic with at least 4 characters")
#     elif len (topic) >50:
#         raise ValidationError("Topic need to be less than 50 characters")



class ChannelForm(FlaskForm):
    name = StringField('CHANNEL NAME', validators=[DataRequired()])
    topic = StringField('CHANNEL TOPIC')
    server_id = StringField('CHANNEL BELONG TO SERVER ID')
    submit = SubmitField("Create")
