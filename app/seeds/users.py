from app.models import db, User, environment, SCHEMA

# Colors = ["lightgrey", "lightred", "lightbrown", "lightblue",
#           "lightyellow", "lightgreen", "lightsalmon", "lightpink"]

Colors = ['green', 'orange', 'purple', 'red',
          'gray', 'yellow', 'blue', "salmon"]

# Adds a demo user, you can add other users here if you want
demo = User(
    username='Demo',
    email='demo@aa.io',
    password='password',
    color=Colors[0])
freya = User(
    username='Freya',
    email='freya@aa.io',
    password='password',
    color=Colors[1])
atlas = User(
    username='Atlas',
    email='atlas@aa.io',
    password='password',
    color=Colors[2])
helen = User(
    username='Helen',
    email='helen@aa.io',
    password='password',
    color=Colors[3])
apollo = User(
    username='Apollo',
    email='apollo@aa.io',
    password='password',
    color=Colors[4])
ares = User(
    username='Ares',
    email='ares@aa.io',
    password='password',
    color=Colors[5])
athena = User(
    username='Athena',
    email='athena@aa.io',
    password='password',
    color=Colors[6])
phoebe = User(
    username='Phoebe',
    email='phoebe@aa.io',
    password='password',
    color=Colors[7])


def seed_users():

    db.session.add(demo)
    db.session.add(freya)
    db.session.add(atlas)
    db.session.add(helen)
    db.session.add(apollo)
    db.session.add(ares)
    db.session.add(athena)
    db.session.add(phoebe)
    db.session.commit()


# Uses a raw SQL query to TRUNCATE or DELETE the users table. SQLAlchemy doesn't
# have a built in function to do this. With postgres in production TRUNCATE
# removes all the data from the table, and RESET IDENTITY resets the auto
# incrementing primary key, CASCADE deletes any dependent entities.  With
# sqlite3 in development you need to instead use DELETE to remove all data and
# it will reset the primary keys for you as well.
def undo_users():
    if environment == "production":
        db.session.execute(
            f"TRUNCATE table {SCHEMA}.users RESTART IDENTITY CASCADE;")
    else:
        db.session.execute("DELETE FROM users")

    db.session.commit()
