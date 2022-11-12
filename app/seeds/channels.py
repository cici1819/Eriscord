from app.models import db, Channel, environment, SCHEMA


def seed_channels():
    # channel id: 1
    server6_channel1 = Channel(
        name='welcome-and-rules',
        server_id=6,
        topic='Welcome-Rules'
    )
    # channel id: 2
    server6_channel2 = Channel(
        name='general-chat',
        server_id=6,
        topic='chat'
    )
    # channel id: 3
    server6_channel3 = Channel(
        name='study-group',
        server_id=6,
        topic='study'
    )
    # channel id: 4
    server6_channel4 = Channel(
        name='help-support',
        server_id=6,
        topic='support'
    )

# server 7 channels -- (Coding) The Programmer's Hangout  ------------------------------------------
    # channel id: 5
    server7_channel1 = Channel(
        name='general-discussion',
        server_id=7,
        topic='Tech-Social-Chat'
    )
    # channel id: 6
    server7_channel2 = Channel(
        name='python-study-group',
        server_id=7,
        topic='Tech-Python'
    )
    # channel id: 7
    server7_channel3 = Channel(
        name='leetcode',
        server_id=7,
        topic='Tech-Leetcode'
    )
    # channel id: 8
    server7_channel4 = Channel(
        name='userful-resources',
        server_id=7,
        topic='Tech-Resources'
    )

# server 8 channels -- Pets-Animals  ------------------------------------------
    # channel id: 9
    server8_channel1 = Channel(
        name='general-rules',
        server_id=8,
        topic='Pets-Animals-Chat'
    )
    # channel id: 10
    server8_channel2 = Channel(
        name='cats',
        server_id=8,
        topic='Pets-Animals-Cats'
    )
    # channel id: 11
    server8_channel3 = Channel(
        name='dogs',
        server_id=8,
        topic='Pets-Animals-Dogs'
    )
    # channel id: 12
    server8_channel4 = Channel(
        name='pets-memes',
        server_id=8,
        topic='Pets-Animals-Memes'
    )

# server 9 channels -- Social & Games ------------------------------------------
    # channel id: 13
    server9_channel1 = Channel(
        name='random',
        server_id=9,
        topic='Social-Games-Chat'
    )
    # channel id: 14
    server9_channel2 = Channel(
        name='gaming-nights',
        server_id=9,
        topic='Social-Games'
    )
    # channel id: 15
    server9_channel3 = Channel(
        name='giveaways',
        server_id=9,
        topic='Social-Games-Giveaway'
    )

# server 10 channels -- Friends  ------------------------------------------
    # channel id: 16
    server10_channel1 = Channel(
        name='main-chat',
        server_id=10,
        topic='Fun-Friends-Chat'
    )
    # channel id: 17
    server10_channel2 = Channel(
        name='memes',
        server_id=10,
        topic='Fun-Friends-Memes'
    )
    # channel id: 18
    server10_channel3 = Channel(
        name='news',
        server_id=10,
        topic='Fun-Friends-News'
    )

    db.session.add(server6_channel1)
    db.session.add(server6_channel2)
    db.session.add(server6_channel3)
    db.session.add(server6_channel4)

    db.session.add(server7_channel1)
    db.session.add(server7_channel2)
    db.session.add(server7_channel3)
    db.session.add(server7_channel4)

    db.session.add(server8_channel1)
    db.session.add(server8_channel2)
    db.session.add(server8_channel3)
    db.session.add(server8_channel4)

    db.session.add(server9_channel1)
    db.session.add(server9_channel2)
    db.session.add(server9_channel3)

    db.session.add(server10_channel1)
    db.session.add(server10_channel2)
    db.session.add(server10_channel3)

    db.session.commit()


def undo_channels():
    if environment == "production":
        db.session.execute(
            f"TRUNCATE table {SCHEMA}.channels RESTART IDENTITY CASCADE;")
    else:
        db.session.execute("DELETE FROM channels")

    db.session.commit()
