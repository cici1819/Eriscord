import React, { useState } from "react";
import { useParams } from "react-router";
import MessagesBox from "../Channel/MessagesBox";
import ChannelCreateModal from "../Channel/ChannelCreate";
import ChannelEditModal from "../Channel/ChannelEdit"
import LogoutButton from "../auth/LogoutButton";
import './MainPage.css';
import CurrentUserServer from "../Server/CurrentUserServer";
import UsersInOneServer from "../Server/UsersInOneServer";
import ServerCreate from "../Server/ServerCreate";
import ServerEditModal from "../Server/ServerEdit";
import ServerDelete from "../Server/ServerDelete";
import ChannelListInServer from "../Channel/ChannelListInServer";
import CurrentUserDm from "../DM/CurrentUserDM";
import DMBox from "../DM/DMBox";

<<<<<<< HEAD
function MainPage(props) {
    const { dmShow } = props
    let messageShow;
    if (dmShow === false) {
        messageShow = true
    }
    return (
        <div className="main-page-container">

            <div className="server-sidebar"> direct messages and server bar
=======

function MainPage() {
    return (
        <div className="main-page-container">

            <div className="server-sidebar">
                <CurrentUserServer />
                {/* <div>
                <ServerCreate />
                </div> */}
            </div>
>>>>>>> 3f7a171ac4eac6f77768bbf6c3f4e6f4c6a8f053

                <CurrentUserServer />
                <ServerCreate />
            </div>

<<<<<<< HEAD
            <div className="channel-or-DM-sidebar">
            {messageShow && <ServerEdit />}
                {messageShow &&<ServerDelete />}
                <div>
                    {messageShow &&
                    <ChannelCreateModal />

                    }
                </div>

                <div>
                    {
                        messageShow &&
                    <ChannelListInServer />
                    }
                    {
                        dmShow &&
                  <CurrentUserDm />

                    }
                    {messageShow &&
                    <ChannelEditModal />
                    }
                </div>

                <div>
=======
                <ServerEditModal />
                <ServerDelete />
                <ChannelListInServer />
                <div>
                    <ChannelCreateModal />
                </div>

                <div>
                    <ChannelListInServer />
                    <ChannelEditModal />
                </div>

                <div className="currentUser-logout">
>>>>>>> 3f7a171ac4eac6f77768bbf6c3f4e6f4c6a8f053
                    <LogoutButton />
                </div>


            </div>
            { messageShow &&
                <div className="messages-container"> all the messages map
                    <MessagesBox />
                </div>
            }
            {dmShow &&
            <DMBox />

<<<<<<< HEAD
            }
            <div className="server-users-bar">users who subscribed the server bar
                <UsersInOneServer />
            </div>
            <div>

            </div>
=======
            <div className="messges-user-div">
                <div className="messages-container"> all the messages map
                    <MessagesBox />
                </div>

                <div className="server-users-bar">users who subscribed the server bar
                    <UsersInOneServer />
                </div>
            </div>

>>>>>>> 3f7a171ac4eac6f77768bbf6c3f4e6f4c6a8f053
        </div>
    )
}




export default MainPage;
