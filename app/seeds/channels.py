from app.models import db, Channel, environment, SCHEMA


def seed_channels():
    # server14
    # channel id: 1
    server14_channel1 = Channel(
        name='welcome-and-rules',
        server_id=14,
        topic='Welcome-Rules'
    )
    # channel id: 2
    server14_channel2 = Channel(
        name='general-chat',
        server_id=14,
        topic='chat'
    )
    # channel id: 3
    server14_channel3 = Channel(
        name='study-group',
        server_id=14,
        topic='study'
    )
    # channel id: 4
    server14_channel4 = Channel(
        name='help-support',
        server_id=14,
        topic='support'
    )

# server 15 channels -- (Coding) The Programmer's Hangout  ------------------------------------------
    # channel id: 5
    server15_channel1 = Channel(
        name='general-discussion',
        server_id=15,
        topic='Tech-Social-Chat'
    )
    # channel id: 6
    server15_channel2 = Channel(
        name='python-study-group',
        server_id=15,
        topic='Tech-Python'
    )
    # channel id: 7
    server15_channel3 = Channel(
        name='leetcode',
        server_id=15,
        topic='Tech-Leetcode'
    )
    # channel id: 8
    server15_channel4 = Channel(
        name='userful-resources',
        server_id=15,
        topic='Tech-Resources'
    )

# server 16 channels -- Pets-Animals  ------------------------------------------
    # channel id: 9
    server16_channel1 = Channel(
        name='general-rules',
        server_id=16,
        topic='Pets-Animals-Chat'
    )
    # channel id: 10
    server16_channel2 = Channel(
        name='funny-dogs',
        server_id=16,
        topic='Pets-Animals-Cats'
    )
    # channel id: 11
    server16_channel3 = Channel(
        name='adventure-time-hangout',
        server_id=16,
        topic='Pets-Animals-Dogs'
    )
    # channel id: 12
    server16_channel4 = Channel(
        name='dogs-memes',
        server_id=16,
        topic='Pets-Animals-Memes'
    )

# server 17 channels -- Social & Games ------------------------------------------
    # channel id: 13
    server17_channel1 = Channel(
        name='random',
        server_id=17,
        topic='Social-Games-Chat'
    )
    # channel id: 14
    server17_channel2 = Channel(
        name='gaming-nights',
        server_id=17,
        topic='Social-Games'
    )
    # channel id: 15
    server17_channel3 = Channel(
        name='giveaways',
        server_id=17,
        topic='Social-Games-Giveaway'
    )

# server 18 channels -- Friends  ------------------------------------------
    # channel id: 16
    server18_channel1 = Channel(
        name='main-chat',
        server_id=18,
        topic='Fun-Friends-Chat'
    )
    # channel id: 17
    server18_channel2 = Channel(
        name='memes',
        server_id=18,
        topic='Fun-Friends-Memes'
    )
    # channel id: 18
    server18_channel3 = Channel(
        name='news',
        server_id=18,
        topic='Fun-Friends-News'
    )

# server 19 channels -- cozy  ------------------------------------------
    # channel id: 19
    server19_channel1 = Channel(
        name='general-rules',
        server_id=19,
        topic='Cozy-Chat'
    )
    # channel id: 20
    server19_channel2 = Channel(
        name='cozy-chat',
        server_id=19,
        topic='Cozy-Memes'
    )
    # channel id: 21
    server19_channel3 = Channel(
        name='fun-friends',
        server_id=19,
        topic='Cozy-fun'
    )

    # server 20 channels -- top-chef  ------------------------------------------
    # channel id: 22
    server20_channel1 = Channel(
        name='general-rules',
        server_id=20,
        topic='Top-Chef-Rule'
    )
    # channel id: 23
    server20_channel2 = Channel(
        name='game-room',
        server_id=20,
        topic='Top-Chef-Game'
    )

    # server 21 channels -- rose garden  ------------------------------------------
    # channel id: 24
    server21_channel1 = Channel(
        name='rose-garden-rules',
        server_id=21,
        topic='Rose-Garden-rule'
    )
    # channel id: 25
    server21_channel2 = Channel(
        name='chatting-zone',
        server_id=21,
        topic='Rose-Garden-Chat'
    )

    # server 22 channels -- moon camp  ------------------------------------------
    # channel id: 26
    server22_channel1 = Channel(
        name='moon-camp-rules',
        server_id=22,
        topic='Moon-Camp-rule'
    )
    # channel id: 27
    server22_channel2 = Channel(
        name='moon-chatting',
        server_id=22,
        topic='Moon-Camp-Chat'
    )

    # server 23 channels -- pokemon legends  ------------------------------------------
    # channel id: 28
    server23_channel1 = Channel(
        name='general-rules',
        server_id=23,
        topic='pokemon-rule'
    )
    # channel id: 29
    server23_channel2 = Channel(
        name='pokemon-memes',
        server_id=23,
        topic='pokemon-Chat'
    )

# server 24 channels -- quiet game  ------------------------------------------
    # channel id: 30
    server24_channel1 = Channel(
        name='quiet-rules',
        server_id=24,
        topic='quiet-rule'
    )
    # channel id: 31
    server24_channel2 = Channel(
        name='shhh',
        server_id=24,
        topic='quiet-Chat'
    )

# server 25 channels -- study-world  ------------------------------------------
    # channel id: 32
    server25_channel1 = Channel(
        name='general-rules',
        server_id=25,
        topic='general-rules'
    )
    # channel id: 33
    server25_channel2 = Channel(
        name='help-zone',
        server_id=25,
        topic='study-help'
    )

# server 26 channels -- cat-hub ------------------------------------------
    # channel id: 34
    server26_channel1 = Channel(
        name='generals',
        server_id=26,
        topic='general-rules'
    )
    # channel id: 35
    server26_channel2 = Channel(
        name='cat-memes',
        server_id=26,
        topic='cat-chat'
    )

# server 27 channels -- health hero ------------------------------------------
    # channel id: 36
    server27_channel1 = Channel(
        name='generals-rules',
        server_id=27,
        topic='general-rules'
    )
    # channel id: 37
    server27_channel2 = Channel(
        name='health-eat-live',
        server_id=27,
        topic='health-eat-live'
    )

# server 28 channels -- health hero ------------------------------------------
    # channel id: 38
    server28_channel1 = Channel(
        name='generals',
        server_id=28,
        topic='general-rules'
    )
    # channel id: 39
    server28_channel2 = Channel(
        name='have-a-chat',
        server_id=28,
        topic='chat'
    )

# server 29 channels -- health hero ------------------------------------------
    # channel id: 40
    server29_channel1 = Channel(
        name='lemon-rules',
        server_id=29,
        topic='general-rules'
    )
    # channel id: 41
    server29_channel2 = Channel(
        name='lemon-chat',
        server_id=29,
        topic='chat'
    )

    db.session.add(server14_channel1)
    db.session.add(server14_channel2)
    db.session.add(server14_channel3)
    db.session.add(server14_channel4)

    db.session.add(server15_channel1)
    db.session.add(server15_channel2)
    db.session.add(server15_channel3)
    db.session.add(server15_channel4)

    db.session.add(server16_channel1)
    db.session.add(server16_channel2)
    db.session.add(server16_channel3)
    db.session.add(server16_channel4)

    db.session.add(server17_channel1)
    db.session.add(server17_channel2)
    db.session.add(server17_channel3)

    db.session.add(server18_channel1)
    db.session.add(server18_channel2)
    db.session.add(server18_channel3)

    db.session.add(server19_channel1)
    db.session.add(server19_channel2)
    db.session.add(server19_channel3)

    db.session.add(server20_channel1)
    db.session.add(server20_channel2)

    db.session.add(server21_channel1)
    db.session.add(server21_channel2)

    db.session.add(server22_channel1)
    db.session.add(server22_channel2)

    db.session.add(server23_channel1)
    db.session.add(server23_channel2)

    db.session.add(server24_channel1)
    db.session.add(server24_channel2)

    db.session.add(server25_channel1)
    db.session.add(server25_channel2)

    db.session.add(server26_channel1)
    db.session.add(server26_channel2)

    db.session.add(server27_channel1)
    db.session.add(server27_channel2)

    db.session.add(server28_channel1)
    db.session.add(server28_channel2)

    db.session.add(server29_channel1)
    db.session.add(server29_channel2)

    db.session.commit()


def undo_channels():
    if environment == "production":
        db.session.execute(
            f"TRUNCATE table {SCHEMA}.channels RESTART IDENTITY CASCADE;")
    else:
        db.session.execute("DELETE FROM channels")

    db.session.commit()
