
from app.models import db, Message, environment, SCHEMA
from datetime import datetime


def seed_messages():
    first = Message(
        content="HELLO, I AM NEW",
        channel_id=2,
        server_id=6,
        created_at=datetime.now(),
        memberl_id=1
    )
    db.session.add(first)
    second = Message(
        content="Please stop yelling",
        channel_id=2,
        server_id=6,
        created_at=datetime.now(),
        memberl_id=2
    )
    db.session.add(second)
    third = Message(
        content="DON'T LISTEN, YELL ALL YOU WANT",
        channel_id=2,
        server_id=6,
        created_at=datetime.now(),
        memberl_id=3
    )
    db.session.add(third)
    fourth = Message(
        content="IT'S REALLY LOUD IN HERE",
        channel_id=2,
        server_id=6,
        created_at=datetime.now(),
        memberl_id=4
    )
    db.session.add(fourth)
    fifth = Message(
        content="IKR!?!?",
        channel_id=2,
        server_id=6,
        created_at=datetime.now(),
        memberl_id=5
    )
    db.session.add(fifth)
    sixth = Message(
        content="sorry caps",
        channel_id=2,
        server_id=6,
        created_at=datetime.now(),
        memberl_id=1
    )
    db.session.add(sixth)
    seventh = Message(
        content="Hey, how's everyone doing?",
        channel_id=5,
        server_id=7,
        created_at=datetime.now(),
        memberl_id=1
    )
    db.session.add(seventh)
    eighth = Message(
        content="P good, hbu?",
        channel_id=5,
        server_id=7,
        created_at=datetime.now(),
        memberl_id=8
    )
    db.session.add(eighth)
    ninth = Message(
        content="Not bad, thanks!",
        channel_id=5,
        server_id=7,
        created_at=datetime.now(),
        memberl_id=1
    )
    db.session.add(ninth)
    tenth = Message(
        content="Now kith",
        channel_id=5,
        server_id=7,
        created_at=datetime.now(),
        memberl_id=9
    )
    db.session.add(tenth)
    eleventh = Message(
        content="LOL",
        channel_id=5,
        server_id=7,
        created_at=datetime.now(),
        memberl_id=10
    )
    db.session.add(eleventh)
    twelfth = Message(
        content="Anyone here?",
        channel_id=6,
        server_id=7,
        created_at=datetime.now(),
        memberl_id=1
    )
    db.session.add(twelfth)
    db.session.commit()


def undo_messages():
    if environment == "production":
        db.session.execute(
            f"TRUNCATE table {SCHEMA}.messages RESTART IDENTITY CASCADE;")
    else:
        db.session.execute("DELETE FROM messages")

    db.session.commit()
