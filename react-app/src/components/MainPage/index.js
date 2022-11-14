import React, { useState } from "react";
import MessagesBox from "../Channel/MessagesBox";
import ChannelCreateModal from "../Channel/ChannelCreate";
import ChannelEditModal  from "../Channel/ChannelEdit"
import './MainPage.css';


function MainPage(){
    return (
        <div className="main-page-container">

        <div className="server-sidebar"> direct messages and server bar </div>

            <div className="channel-or-DM-sidebar"> direct frined or channels
                <div>
                <ChannelCreateModal/>
                </div>

                <div>
                    (mapping channel list,each channel have this icon to click to edit channel content)
                 <ChannelEditModal />
                </div>

            </div>

        <div className="messages-container"> all the messages map
        <MessagesBox />
        </div>

        <div className="server-users-bar">users who subscribed the server bar</div>
        </div>
    )
}




export default MainPage;
