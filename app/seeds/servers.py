from app.models import db, Server, environment, SCHEMA
from .users import demo, freya, atlas, helen, apollo, ares, athena, phoebe


def seed_servers():
    # DM server id 1-5
    dm_server1 = Server(
        name="Demo-2",
        # img = "https://logos-world.net/wp-content/uploads/2020/12/Discord-Logo.png",
        is_dm=True,
        description="very active server where we actually talk and not just spam edgy btard memes",
        owner_id=1,
        server_server_members=[demo, freya]
    )
    dm_server2 = Server(
        name="Demo-3",
        # img = "https://logos-world.net/wp-content/uploads/2020/12/Discord-Logo.png",
        description="very active server where we actually talk and not just spam edgy btard memes",
        is_dm=True,
        owner_id=3,
        server_server_members=[demo, atlas]
    )
    dm_server3 = Server(
        name="Domo-4",
        # img = "https://logos-world.net/wp-content/uploads/2020/12/Discord-Logo.png",
        description="very active server where we actually talk and not just spam edgy btard memes",
        is_dm=True,
        owner_id=4,
        server_server_members=[demo, helen]
    )
    dm_server4 = Server(
        name="Domo-5",
        # img = "https://logos-world.net/wp-content/uploads/2020/12/Discord-Logo.png",
        description="very active server where we actually talk and not just spam edgy btard memes",
        is_dm=True,
        owner_id=5,
        server_server_members=[demo, apollo]
    )
    dm_server5 = Server(
        name="Domo-6",
        # img = "https://logos-world.net/wp-content/uploads/2020/12/Discord-Logo.png",
        description="very active server where we actually talk and not just spam edgy btard memes",
        is_dm=True,
        owner_id=6,
        server_server_members=[demo, athena]
    )
    # RM channel--server  id 6-11 -------------------------------------------------
    channel_server1 = Server(
        name="Friends Who Study Together",
        owner_id=1,
        description="Our community is always open for you. It is designed to give you a productivity boost",
        img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqLceauEctTS8nGSv4_6IGIVCic9DNDB_N0g&usqp=CAU",
        is_dm=False,
        server_server_members=[demo, freya, atlas,
                               helen, apollo, ares, athena, phoebe]
    )

    channel_server2 = Server(
        name="Python Study Hub",
        owner_id=2,
        description="A simple python and more helping server. We try to help anyone with their coding needs.",
        img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRX9KYoFpX9v-HF45IjK17OC4jhT19I55y0Fw&usqp=CAU",
        is_dm=False,
        server_server_members=[demo, freya, atlas, helen, phoebe]
    )

    channel_server3 = Server(
        name="Walk and Talk the Dog",
        owner_id=3,
        description="This is a dog lovers server! Join if you like doggies",
        img="https://www.travelandleisure.com/thmb/gs7Gj12SUw2hy0F0MM9AMmYV0AU=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/corgi-dog-name-POPDOGS0819-1ebb8efb2c68499eab1c76411c9d1c15.jpg",
        is_dm=False,
        server_server_members=[demo, apollo, athena, phoebe, ares]
    )

    channel_server4 = Server(
        name="Game for Fun!",
        owner_id=4,
        description="Welcome to join us if you are a fan of mystery and detective games and comics.",
        img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAWlzUgeQH0ncHvPXsWF3gHJ40esKNa8Obev_FoSydKAbbtn71KpnUlEkRr1pjroQVias&usqp=CAU",
        is_dm=False,
        server_server_members=[demo, freya, apollo, phoebe]
    )

    channel_server5 = Server(
        name="friEnds",
        owner_id=5,
        description="A community for all users who want to call a server home. Here we hangout. Have a laugh. We're always looking for lively people so come hangout with us!",
        img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3olZxkvOupYR6cnNp9eLKuj_x43bhgZGnTQ&usqp=CAU",
        is_dm=False,
        server_server_members=[demo, atlas, helen, apollo, athena]
    )

    channel_server6 = Server(
        name="Cozy-Zone",
        owner_id=6,
        description="If you're chill, want friends, and like comfy servers, then join for funposting, friends, and good times ",
        img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhdthftgBRFSCKLWsgrNPVzIvJF6yZVzA-WQ&usqp=CAU",
        is_dm=False,
        server_server_members=[demo, freya, ares, athena, phoebe]
    )

    db.session.add(dm_server1)
    db.session.add(dm_server2)
    db.session.add(dm_server3)
    db.session.add(dm_server4)
    db.session.add(dm_server5)
    db.session.add(channel_server1)
    db.session.add(channel_server2)
    db.session.add(channel_server3)
    db.session.add(channel_server4)
    db.session.add(channel_server5)
    db.session.add(channel_server6)
    db.session.commit()


def undo_servers():
    if environment == "production":
        db.session.execute(
            f"TRUNCATE table {SCHEMA}.servers RESTART IDENTITY CASCADE;")
    else:
        db.session.execute("DELETE FROM servers")

    db.session.commit()
