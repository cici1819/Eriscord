from flask_wtf import FlaskForm
from wtforms import StringField, SubmitField
from wtforms.validators import DataRequired
from app.models import Server

class ServerForm(FlaskForm):
    name = StringField('SERVER NAME', validators=[DataRequired()])
    img = StringField('ICON')
    description =StringField("Tell us more about your server")
    submit = SubmitField('Create')
