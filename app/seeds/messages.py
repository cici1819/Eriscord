
from app.models import db, Message, environment, SCHEMA
from datetime import datetime


def seed_messages():
    # channel messages -----------------------------------------
    # message id 1-6 for server 6, channel 2---------------------
    first = Message(
        content="HELLO, I AM NEW",
        channel_id=2,
        server_id=6,
        created_at=datetime.now(),
        sender_id=1
    )
    db.session.add(first)
    second = Message(
        content="Please stop yelling",
        channel_id=2,
        server_id=6,
        created_at=datetime.now(),
        sender_id=2
    )
    db.session.add(second)
    third = Message(
        content="DON'T LISTEN, YELL ALL YOU WANT",
        channel_id=2,
        server_id=6,
        created_at=datetime.now(),
        sender_id=3
    )
    db.session.add(third)
    fourth = Message(
        content="IT'S REALLY LOUD IN HERE",
        channel_id=2,
        server_id=6,
        created_at=datetime.now(),
        sender_id=4
    )
    db.session.add(fourth)
    fifth = Message(
        content="IKR!?!?",
        channel_id=2,
        server_id=6,
        created_at=datetime.now(),
        sender_id=5
    )
    db.session.add(fifth)
    sixth = Message(
        content="sorry caps",
        channel_id=2,
        server_id=6,
        created_at=datetime.now(),
        sender_id=1
    )
    db.session.add(sixth)
    # message id 7-11 for server 7, channel 5---------------------
    seventh = Message(
        content="Hey, how's everyone doing?",
        channel_id=5,
        server_id=7,
        created_at=datetime.now(),
        sender_id=1
    )
    db.session.add(seventh)
    eighth = Message(
        content="P good, hbu?",
        channel_id=5,
        server_id=7,
        created_at=datetime.now(),
        sender_id=8
    )
    db.session.add(eighth)
    ninth = Message(
        content="Not bad, thanks!",
        channel_id=5,
        server_id=7,
        created_at=datetime.now(),
        sender_id=1
    )
    db.session.add(ninth)
    tenth = Message(
        content="Now kith",
        channel_id=5,
        server_id=7,
        created_at=datetime.now(),
        sender_id=9
    )
    db.session.add(tenth)
    eleventh = Message(
        content="LOL",
        channel_id=5,
        server_id=7,
        created_at=datetime.now(),
        sender_id=10
    )
    db.session.add(eleventh)
    # message id 12 for server 7, channel 6---------------------
    twelfth = Message(
        content="Anyone here?",
        server_id=1,
        created_at=datetime.now(),
        sender_id=2
    )
    db.session.add(twelfth)

    # DM messages -----------------------------------------
    # message id 13-15 for server 1---------------------------
    thirteen = Message(
        content="Hey! Demo",
        server_id=1,
        created_at=datetime.now(),
        sender_id=2
    )
    db.session.add(thirteen)

    fourteen = Message(
        content="Hi, Freya!",
        server_id=1,
        created_at=datetime.now(),
        sender_id=1
    )
    db.session.add(fourteen)

    fifteen = Message(
        content="Good to see you here!!!",
        server_id=1,
        created_at=datetime.now(),
        sender_id=1
    )
    db.session.add(fifteen)

    # message id 16-17 for server 2---------------------------
    sixteen = Message(
        content="Morning, Atlas!",
        server_id=2,
        created_at=datetime.now(),
        sender_id=1
    )
    db.session.add(sixteen)

    seventeen = Message(
        content="Hi Demo, good morning",
        server_id=2,
        created_at=datetime.now(),
        sender_id=3
    )
    db.session.add(seventeen)
    # message id 18-20 for server 3---------------------------
    eighteen = Message(
        content="Hi Demo, how is going?",
        server_id=3,
        created_at=datetime.now(),
        sender_id=4
    )
    db.session.add(eighteen)

    nineteen = Message(
        content="I'm doing good Helen, how are you today?",
        server_id=3,
        created_at=datetime.now(),
        sender_id=1
    )
    db.session.add(nineteen)

    twenty = Message(
        content="also pretty good here! just wanna say Hi!!!",
        server_id=3,
        created_at=datetime.now(),
        sender_id=4
    )
    db.session.add(twenty)

    db.session.commit()


def undo_messages():
    if environment == "production":
        db.session.execute(
            f"TRUNCATE table {SCHEMA}.messages RESTART IDENTITY CASCADE;")
    else:
        db.session.execute("DELETE FROM messages")

    db.session.commit()
