from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField, SubmitField
from wtforms.validators import DataRequired,ValidationError
# Temporary form for testing, will update
class DmForm(FlaskForm):
    content = StringField('SERVER NAME', validators=[DataRequired()])
    server_id= IntegerField("SERVERID")
    submit = SubmitField('Create')
