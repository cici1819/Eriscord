from app.models import db, Server, environment, SCHEMA
from .users import demo, freya, atlas, helen, apollo, ares, athena, phoebe


def seed_servers():
    # DM server id 1-5
    # dm 1  Demo to everyone ///////////////////////////////////////////
    dm_server1_2 = Server(
        name="Demo-1-2",
        is_dm=True,
        description="message server",
        owner_id=1,
        server_server_members=[demo, freya]
    )
    # dm2
    dm_server1_3 = Server(
        name="Demo-1-3",
        description="message server",
        is_dm=True,
        owner_id=1,
        server_server_members=[demo, atlas]
    )
    # dm3
    dm_server1_4 = Server(
        name="Domo-1-4",
        description="message server",
        is_dm=True,
        owner_id=1,
        server_server_members=[demo, helen]
    )
    # dm4
    dm_server1_5 = Server(
        name="Domo-1-5",
        description="message server",
        is_dm=True,
        owner_id=1,
        server_server_members=[demo, apollo]
    )
    # dm5
    dm_server1_6 = Server(
        name="Domo-1-6",
        description="message server",
        is_dm=True,
        owner_id=1,
        server_server_members=[demo, ares]
    )
    # dm6
    dm_server1_7 = Server(
        name="Domo-1-7",
        description="message server",
        is_dm=True,
        owner_id=1,
        server_server_members=[demo, athena]
    )
    # dm7
    dm_server1_8 = Server(
        name="Domo-1-8",
        description="message server",
        is_dm=True,
        owner_id=1,
        server_server_members=[demo, phoebe]
    )

    # /////////////////////////////////////////////////////////////////
    # dm8  Freya to everyone
    dm_server2_3 = Server(
        name="Demo-2-3",
        description="message server",
        is_dm=True,
        owner_id=2,
        server_server_members=[freya, atlas]
    )
    # dm9
    dm_server2_4 = Server(
        name="Domo-2-4",
        description="message server",
        is_dm=True,
        owner_id=2,
        server_server_members=[freya, helen]
    )
    # dm10
    dm_server2_5 = Server(
        name="Domo-2-5",
        description="message server",
        is_dm=True,
        owner_id=2,
        server_server_members=[freya, apollo]
    )
    # dm11
    dm_server2_6 = Server(
        name="Domo-2-6",
        description="message server",
        is_dm=True,
        owner_id=2,
        server_server_members=[freya, ares]
    )
    # dm12
    dm_server2_7 = Server(
        name="Domo-2-7",
        description="message server",
        is_dm=True,
        owner_id=2,
        server_server_members=[freya, athena]
    )
    # dm13
    dm_server2_8 = Server(
        name="Domo-2-8",
        description="message server",
        is_dm=True,
        owner_id=2,
        server_server_members=[freya, phoebe]
    )

    # RM channel--server  id 6-11 -------------------------------------------------
# rm 6  14
    channel_server1 = Server(
        name="Friends Study Together",
        owner_id=1,
        description="Our community is always open for you. It is designed to give you a productivity boost",
        img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0n2MGFtMrbL3T42-OQfDUopzVAZx4pA5oeg&usqp=CAU",
        is_dm=False,
        server_server_members=[demo, freya, atlas,
                               helen, apollo, ares, athena, phoebe]
    )
 # rm 7 15
    channel_server2 = Server(
        name="Python Study Hub",
        owner_id=2,
        description="A simple python and more helping server. We try to help anyone with their coding needs.",
        # img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRX9KYoFpX9v-HF45IjK17OC4jhT19I55y0Fw&usqp=CAU",
        img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmyTwO-YQ5SsH6W_am5c7rAO7iyEtKZ0PNig&usqp=CAU",
        is_dm=False,
        server_server_members=[demo, freya, atlas, helen, apollo, ares, phoebe]
    )
 # rm 8 16
    channel_server3 = Server(
        name="Walk and Talk the Dog",
        owner_id=3,
        description="Join if you like doggies.This is a dog lovers server!",
        img="https://www.rd.com/wp-content/uploads/2022/06/GettyImages-1291814647-e1654796088869.jpg",
        is_dm=False,
        server_server_members=[demo, freya, atlas,
                               apollo, athena, phoebe]
    )
 # rm 9 17
    channel_server4 = Server(
        name="Game for Fun!",
        owner_id=4,
        description="Welcome to join us if you are a fan of mystery and detective games and comics.",
        # img="https://th.bing.com/th?q=Game+Station+Logo&w=120&h=120&c=1&rs=1&qlt=90&cb=1&dpr=1.9&pid=InlineBlock&mkt=en-US&cc=US&setlang=en&adlt=moderate&t=1&mw=247",
        img="https://s3-us-east-2.amazonaws.com/maryville/wp-content/uploads/2021/03/04131433/MVU-BFADM-2020-Q4-Skyscraper-Future-of-Video-Games-Trends-Technology-Types-header-v2-1000x523.jpg",
        is_dm=False,
        server_server_members=[demo, freya, atlas,
                               helen, apollo, ares, phoebe]
    )
 # rm 10 18
    channel_server5 = Server(
        name="friEnds",
        owner_id=5,
        description="A community for all users who want to call a server home. Here we hangout. Have a laugh. We're always looking for lively people so come hangout with us!",
        img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3olZxkvOupYR6cnNp9eLKuj_x43bhgZGnTQ&usqp=CAU",
        is_dm=False,
        server_server_members=[demo, freya, atlas, apollo, athena, phoebe]
    )
 # rm 11 19
    channel_server6 = Server(
        name="Cozy-Zone",
        owner_id=6,
        description="If you're chill, want friends, and like comfy servers, then join for funposting, friends, and good times ",
        img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhdthftgBRFSCKLWsgrNPVzIvJF6yZVzA-WQ&usqp=CAU",
        is_dm=False,
        server_server_members=[demo, freya, atlas,
                               helen, apollo, ares, athena, phoebe]
    )

# rm 20 7
    channel_server7 = Server(
        name="Top-Chef-Kitchen",
        owner_id=7,
        description="Our game is about cooking and join our server to look at game update, fun stuff, and hang out.",
        img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2lN5_BC5-RUhMIuUoD5xUSaan4otjPLmi2DK-tRc72P0XC1gwuGOF6tMKIMq68GCus7k&usqp=CAU",
        is_dm=False,
        server_server_members=[demo, freya, atlas, athena, phoebe]
    )

# rm 21 8
    channel_server8 = Server(
        name="Rose-Garden",
        owner_id=8,
        description="Welcome to the Rose Garden we hope you stay and have some FUN!",
        img="https://i.etsystatic.com/17037086/r/il/8e9065/3925119813/il_794xN.3925119813_sfpb.jpg",
        is_dm=False,
        server_server_members=[demo, freya, atlas,
                               helen, ares, athena, phoebe]
    )

    # rm 22 9
    channel_server9 = Server(
        name="Moon-Camp",
        owner_id=1,
        description="chill server to make friends! we have online parties weekly!!!",
        img="https://en.pimg.jp/071/765/087/1/71765087.jpg",
        is_dm=False,
        server_server_members=[demo, freya, apollo, ares, athena, phoebe]
    )

    # rm 23 10
    channel_server10 = Server(
        name="Pokemon-Legends",
        owner_id=2,
        description="We are a Pokemon Community server! Join now for our giveaways, events and much more!",
        img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRr9H59iExgTMcNCYaf5dQHSmNLvyHouosKQQ&usqp=CAU",
        is_dm=False,
        server_server_members=[demo, freya, atlas, helen, athena]
    )

    # rm 24 11
    channel_server11 = Server(
        name="The-Quiet-Game",
        owner_id=3,
        description="The world's first deliberately dead server. A server where you are forced to do absolutely nothing.",
        # img="https://variety.com/wp-content/uploads/2022/05/featured_will_smith_v3.jpg?w=910&h=511&crop=1",
        img="https://m.media-amazon.com/images/I/51btmTAizGL._AC_SY780_.jpg",
        is_dm=False,
        server_server_members=[demo, freya, atlas]
    )

    # rm 25 12
    channel_server12 = Server(
        name="Study-World",
        owner_id=4,
        description="We are a starting community from students all around the world. Join us!",
        img="https://ipmssg.org/others/wp-content/uploads/2015/01/cropped-ipmssglogoworld_v4-e1422567267152.png",
        is_dm=False,
        server_server_members=[demo, freya,
                               helen, apollo, ares, athena, phoebe]
    )

    # rm 26 13
    channel_server13 = Server(
        name="The-Cat-Hut",
        owner_id=5,
        description="The cat hut is where cat fans are in one wholesome community! We offer a fun community",
        img="https://cdn.create.vista.com/downloads/a5c01566-cc28-4cfa-8350-5c3245fb3751_1024.jpeg",
        is_dm=False,
        server_server_members=[demo, freya, atlas, apollo, ares, phoebe]
    )

    # rm 27 14
    channel_server14 = Server(
        name="Health-Hero",
        owner_id=6,
        description="Sharing recipes, tips and tricks, community movie nights. All with like minded healthy lifestyle friends!",
        img="https://i.pinimg.com/736x/0d/76/01/0d7601702513dd9bb28b183be3c3c2d9.jpg",
        is_dm=False,
        server_server_members=[demo, freya, atlas,
                               helen, apollo, ares, athena, phoebe]
    )

    # rm 28 15
    channel_server15 = Server(
        name="Have-a-Chat",
        owner_id=7,
        description="Here is diversity in Discord. You can play Games, talk about anything okay. Welcome to this server",
        img="https://img.freepik.com/free-vector/hipster-people-talking-using-computers-co-working_74855-5267.jpg",
        is_dm=False,
        server_server_members=[demo, freya, atlas,
                               helen, athena, phoebe]
    )

    # rm 29 16
    channel_server16 = Server(
        name="Lemon-Republic",
        owner_id=8,
        description="Server to meet and get to know people to talk about life and have a good time. JOIN, PARTICIPATE, BE AWESOME!",
        img="https://media.istockphoto.com/id/894665208/vector/vector-lemon-seamless-border.jpg?s=612x612&w=0&k=20&c=XcE59q133Koo_1DNudQwr4oEijc5gaSpfN9UfT5HDpA=",
        is_dm=False,
        server_server_members=[demo, freya, atlas,
                               apollo, ares, athena, phoebe]
    )

    db.session.add(dm_server1_2)
    db.session.add(dm_server1_3)
    db.session.add(dm_server1_4)
    db.session.add(dm_server1_5)
    db.session.add(dm_server1_6)
    db.session.add(dm_server1_7)
    db.session.add(dm_server1_8)
    db.session.add(dm_server2_3)
    db.session.add(dm_server2_4)
    db.session.add(dm_server2_5)
    db.session.add(dm_server2_6)
    db.session.add(dm_server2_7)
    db.session.add(dm_server2_8)
    db.session.add(channel_server1)
    db.session.add(channel_server2)
    db.session.add(channel_server3)
    db.session.add(channel_server4)
    db.session.add(channel_server5)
    db.session.add(channel_server6)
    db.session.add(channel_server7)
    db.session.add(channel_server8)
    db.session.add(channel_server9)
    db.session.add(channel_server10)
    db.session.add(channel_server11)
    db.session.add(channel_server12)
    db.session.add(channel_server13)
    db.session.add(channel_server14)
    db.session.add(channel_server15)
    db.session.add(channel_server16)

    db.session.commit()


def undo_servers():
    if environment == "production":
        db.session.execute(
            f"TRUNCATE table {SCHEMA}.servers RESTART IDENTITY CASCADE;")
    else:
        db.session.execute("DELETE FROM servers")

    db.session.commit()
