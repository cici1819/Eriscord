import React, { useState } from "react";
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


function MainPage() {
    return (
        <div className="main-page-container">

            <div className="server-sidebar">
                <CurrentUserServer />
                {/* <div>
                <ServerCreate />
                </div> */}
            </div>

            <div className="channel-or-DM-sidebar">

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
