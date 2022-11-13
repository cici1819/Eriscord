import React, { useState } from "react";
import MessagesBox from "../Channel/MessagesBox";
import './MainPage.css';


function MainPage(){
    return (
        <div className="main-page-container">

        <div className="server-sidebar"> direct messages and server bar </div>

        <div className="channel-or-DM-sidebar"> direct frined or channels </div>

        <div className="messages-container"> all the messages map
        <MessagesBox />
        </div>

        </div>
    )
}




export default MainPage;
