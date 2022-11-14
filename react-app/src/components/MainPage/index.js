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
import ServerEdit from "../Server/ServerEdit";
import ServerDelete from "../Server/ServerDelete";
import ChannelListInServer from "../Channel/ChannelListInServer";
import CurrentUserDm from "../DM/CurrentUserDM";
import DMBox from "../DM/DMBox";

function MainPage(props) {
    const { dmShow } = props
    let messageShow;
    if (dmShow === false) {
        messageShow = true
    }
    return (
        <div className="main-page-container">

            <div className="server-sidebar"> direct messages and server bar

                <CurrentUserServer />
                <ServerCreate />
            </div>

            <div className="channel-or-DM-sidebar">

                <ServerEdit />
                <ServerDelete />
                <ChannelListInServer />
                <div>
                    <ChannelCreateModal />
                </div>

                <div>
                    <ChannelListInServer />
                    <ChannelEditModal />
                </div>

                <div>
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

            }
            <div className="server-users-bar">users who subscribed the server bar
                <UsersInOneServer />
            </div>
            <div>
                <CurrentUserDm />

            </div>
        </div>
    )
}




export default MainPage;
