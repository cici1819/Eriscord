from app.models import db, Server, environment, SCHEMA
from .users import demo, freya, atlas, helen, apollo, ares, athena, phoebe
def seed_servers():
    dm_server1 = Server(
        name = "Demo-2",
        # img = "https://logos-world.net/wp-content/uploads/2020/12/Discord-Logo.png",
        is_dm = True,
        owner_id =1,
        server_server_members = [demo, freya]
    )
    dm_server2 = Server(
        name = "Demo-3",
        # img = "https://logos-world.net/wp-content/uploads/2020/12/Discord-Logo.png",
        is_dm = True,
        owner_id=3,
        server_server_members = [demo, atlas]
    )
    dm_server3 = Server(
        name = "Domo-4",
        # img = "https://logos-world.net/wp-content/uploads/2020/12/Discord-Logo.png",
        is_dm = True,
        owner_id=4,
        server_server_members = [demo, helen]
    )
    dm_server4 = Server(
        name = "Domo-5",
        # img = "https://logos-world.net/wp-content/uploads/2020/12/Discord-Logo.png",
        is_dm = True,
        owner_id=5,
        server_server_members = [demo, apollo]
    )
    dm_server5 = Server(
        name = "Domo-6",
        # img = "https://logos-world.net/wp-content/uploads/2020/12/Discord-Logo.png",
        is_dm = True,
        owner_id=6,
        server_server_members = [demo, athena]
    )

    # channel--server  id 6-12
    channel_server1 = Server(
        name = "Demo-server-1",
        owner_id = 1,
        description = "very active server where we actually talk and not just spam edgy btard memes",
        img ="https://gravatar.com/avatar/baf22e3c7a548966f5d5f15229c55f28?s=400&d=robohash&r=x",
        is_dm = False,
        server_server_members = [demo, freya, atlas, helen, apollo, ares, athena, phoebe]
    )


    channel_server2 = Server(
        name ="Demo-server-2",
        owner_id =2,
        description = "We're a small server that has been slowly growing into a comfortable community. If you're looking for a place with a laid-back atmosphere to hang out and make genuine friends — and occasional gaming and movie nights — this might be it",
        img = "https://skymaps.com/store/posters/Constellation-Night-Sky-Star-Map-Wall-Decal-600.png",
        is_dm = False,
        server_server_members = [demo, freya, atlas, helen]
    )


    channel_server3 = Server(
        name = "test-server-1",
        owner_id = 3,
        description = "Welcome to join us if you are a fan of mystery and detective games and comics ",
        img = "https://cdn.fansshare.com/image/detectiveconan/detective-conan-wallpaper-background-pc-102139921.jpg",
        is_dm= False,
        server_server_members = [demo, apollo, athena, phoebe, ares]
    )


    channel_server4 = Server(
        name = "test -server-2",
        owner_id = 4,
        description = "if ur a decent person who isn't too weird maybe you'd find it nice here  we chat and play games sometimes",
        img = "https://cms-assets.tutsplus.com/cdn-cgi/image/width=850/uploads/users/1631/posts/35865/image/Placeit%20net%20logo%20maker16.jpg",
        is_dm = False,
        server_server_members = [demo, freya, apollo, phoebe]
    )


    channel_server5 = Server(
        name = "weMcome",
        owner_id = 5,
        description ="A community for all users who want to call a server home. Here we hangout. Have a laugh. Play games in VC etc. We're a very laid back server and were always looking for lively people so come hangout with us!",
        img = "https://previews.123rf.com/images/captainvector/captainvector1602/captainvector160218152/52863657-smiley-face-showing-thumbs-up.jpg",
        is_dm = False,
        server_server_members = [demo, atlas, athena]
    )


    channel_server6 = Server(
        name = "friEnds",
        owner_id = 6,
        description = "If you're chill, want friends, and like comfy servers, then join for funposting, friends, and good times ",
        img = "https://static.wikia.nocookie.net/smiling-friends/images/1/18/Smilingfriends.png",
        is_dm = False,
        server_server_members = [demo, freya, ares]
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
