import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import NavBar from "../NavBar";
import './HomePage.css';
import eriscord_clear_logo from '../../img/favicon_clear_eriscord_192x192.png';
import sec2_img from "../../img/home-page/2-1.png"
import sec3_img from "../../img/home-page/3-1.png"
import sec4_img from "../../img/home-page/4-1.png"
import sec5_img from "../../img/home-page/5-1.png"

function HomePage() {
    return (
        <div className="home-page-container">
            <NavBar />
            add those funny pictures here
            <div className="home-page-section-1">
                {/* <div className="hps1-background"></div> */}
                <div className="hps1-nav-bar-section">
                    <div className="hps1-nav-bar-section-left">
                        <img src={eriscord_clear_logo} id="logo-img" />
                        <div id='logo-name'>Eriscord</div>
                    </div>
                    <div className="hps1-nav-bar-section-middle">

                    </div>
                    <div className="hps1-nav-bar-section-right">
                        <NavLink to={"/login"}>
                            <button id="home-login-button">Login</button>
                        </NavLink>
                    </div>
                </div>
                <div className="hps1-word-section">
                    <h1 className="hps1-word-section-title">
                        IMAGINE A PLACE...
                    </h1>
                    <div id="section-content">
                        ...where you can belong to a school club, a gaming group, or a worldwide art community. Where just you and a handful of friends can spend time together. A place that makes it easy to talk every day and hang out more often.
                    </div>
                </div>
            </div>
            <div className="home-page-section-2-4" id="s2" >
                <div className="home-page-section-2">
                    <img src={sec2_img} id="sec-img" />
                    <div id="section-container">
                        <h2>Create an invite-only place where you belong</h2>
                        <div id="section-content">
                            Eriscord servers are organized into topic-based channels where you can collaborate, share, and just talk about your day without clogging up a group chat.
                        </div>
                    </div>
                </div>
            </div>
            <div className="home-page-section-2-4" id="s3">
                <div className="home-page-section-3">
                    <div id="section-container">
                        <h2>Where hanging out is easy</h2>
                        <div id="section-content">
                            Grab a seat in a channel when you're free. Friends in your server can see you're around and instantly pop in to chat.
                        </div>
                    </div>
                    <img src={sec3_img} id="sec-img" />
                </div>
            </div>
            <div className="home-page-section-2-4" id="s4">
                <div className="home-page-section-4">
                    <img src={sec4_img} id="sec-img" />
                    <div id="section-container">
                        <h2>From few to a fandom</h2>
                        <div id="section-content">
                            Get any community running with moderation tools and custom member access. Give members special powers, set up private channels, and more.
                        </div>
                    </div>
                </div>
            </div>
            <div className="home-page-section-5" id="s5">
                <div className="home-page-section-5-inner">
                    <h2>RELIABLE TECH FOR STAYING CLOSE</h2>
                    <div id="section-content">
                        Low-latency voice and video feels like you’re in the same room. Wave hello over video, watch friends stream their games, or gather up and have a drawing session with screen share.
                    </div>
                    <img src={sec5_img} id="sec-img" />
                </div>
            </div>
        </div>
    )
}




export default HomePage;
