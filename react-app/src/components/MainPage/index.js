import React, { useState } from "react";
import MessagesBox from "../Channel/MessagesBox";
import ChannelCreateModal from "../Channel/ChannelCreate";
import ChannelEditModal from "../Channel/ChannelEdit"
import LogoutButton from "../auth/LogoutButton";
import './MainPage.css';
import CurrentUserServer from "../Server/CurrentUserServer";
import UsersInOneServer from "../Server/UsersInOneServer";
import ServerCreateModal from "../Server/ServerCreate";
// import ServerEdit from "../Server/ServerEdit/ServerEditForm";
import ServerDelete from "../Server/ServerDelete";
import ChannelListInServer from "../Channel/ChannelListInServer";
import ServerEditModal from "../Server/ServerEdit";


function MainPage() {
    return (
        <div className="main-page-container">

            <div className="server-sidebar">
                <div>
                <CurrentUserServer />
                </div>
                <div>
                <ServerCreateModal/>
                </div>
            </div>
            <div className="channel-or-DM-sidebar">
                <div>
                <ServerEditModal />
                </div>

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
                    <LogoutButton />
                </div>


            </div>

            <div className="messges-user-div">
                <div className="messages-container"> all the messages map
                    <MessagesBox />
                </div>

                <div className="server-users-bar">users who subscribed the server bar
                    <UsersInOneServer />
                </div>
            </div>

        </div>
    )
}




export default MainPage;
