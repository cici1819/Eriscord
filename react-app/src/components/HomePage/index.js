import React from "react";
import { NavLink, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import './HomePage.css';
import eriscord_blue_logo from '../../img/home-page/new-home-page-logo-blue.png';
import eriscord_black_logo from '../../img/home-page/new-home-page-logo-black.png';
import sec2_img from "../../img/home-page/2-1.png"
import sec3_img from "../../img/home-page/3-1.png"
import sec4_img from "../../img/home-page/4-1.png"
import sec5_img from "../../img/home-page/5-1.png"
import github from "../../img/githublogo.png"
import linkedIn from "../../img/linkedin.jpg"


function HomePage() {
    const currentUser = useSelector(state => state.session.user)
    if (currentUser) return <Redirect to="/channels/@me"></Redirect>
    return (
        <div className="home-page-container">
            <div className="home-page-section-1">
                <div className="hps1-nav-bar-section">
                    <div className="hps1-nav-bar-section-left">
                        <img src={eriscord_blue_logo} id="logo-img" alt="home-img" />
                        <div id='logo-name'>Eriscord</div>
                    </div>
                    <div className="hps1-nav-bar-section-right">
                        <NavLink to={"/login"}>
                            <button id="home-login-button">Log In</button>
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
                    <img src={sec2_img} id="sec-img" alt="home-img" />
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
                    <img src={sec3_img} id="sec-img" alt="home-img" />
                </div>
            </div>
            <div className="home-page-section-2-4" id="s4">
                <div className="home-page-section-4">
                    <img src={sec4_img} id="sec-img" alt="home-img" />
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
                        Low-latency voice and video feels like you're in the same room. Wave hello over video, watch friends stream their games, or gather up and have a drawing session with screen share.
                    </div>
                    <img src={sec5_img} id="sec-img-5" alt="home-img" />
                </div>
            </div>
            <div className="home-page-section-6" id="s6">
                <div className="home-page-section-6-inner">
                    <div className="home-page-section-6-inner-h4">
                        <h4>Ready to start your journey?</h4>
                    </div>
                    <div className="home-page-section-6-login">
                        <NavLink to={"/login"}>
                            <button id="sec6-login-button">Login to Eriscord</button>
                        </NavLink>
                    </div>
                </div>
            </div>
            <div className="home-page-section-7" id="s7">
                <div className="home-page-section-7-top">
                    <div className="s7-top-left">ERISCORD DEVELOPERS</div>
                    <div className='s7-top-links-container'>
                        <a className='s7-top-name' href='https://cici1819.github.io/' target="_blank">Cici Cheng</a>
                        <div className='s7-bttm'>
                            <a className='s7-bttm-logo1' href='https://github.com/cici1819' target="_blank"><img src={github} alt='github' /></a>
                            <a className='s7-bttm-logo2' href='https://www.linkedin.com/in/cici-cheng-87386a259/' target="_blank"><img src={linkedIn} alt='linkedin' /></a>
                        </div>
                    </div>
                    <div className='s7-top-links-container'>
                        <a className='s7-top-name' href='https://nydf.github.io/' target="_blank">Frank Song</a>
                        <div className='s7-bttm'>
                            <a className='s7-bttm-logo1' href='https://github.com/NYDF' target="_blank"><img src={github} alt='github' /></a>
                            <a className='s7-bttm-logo2' href='https://www.linkedin.com/in/dongfang-song-25261218a/' target="_blank"><img src={linkedIn} alt='linkedin' /></a>
                        </div>
                    </div>
                    <div className='s7-top-links-container'>
                        <a className='s7-top-name' href='https://quantitativesneezing.github.io/' target="_blank">Jason Arnold</a>
                        <div className='s7-bttm'>
                            <a className='s7-bttm-logo1' href='https://github.com/QuantitativeSneezing' target="_blank"><img src={github} alt='github' /></a>
                            <a className='s7-bttm-logo2' href='https://www.linkedin.com/in/jason-arnold-539005183/' target="_blank"><img src={linkedIn} alt='linkedin' /></a>
                        </div>
                    </div>
                    <div className='s7-top-links-container'>
                        <a className='s7-top-name' href='https://effieml.github.io/' target="_blank">Ming Liu</a>
                        <div className='s7-bttm'>
                            <a className='s7-bttm-logo1' href='https://github.com/EffieML' target="_blank"><img src={github} alt='github' /></a>
                            <a className='s7-bttm-logo2' href='https://www.linkedin.com/in/effie-liu-b57372261/' target="_blank"><img src={linkedIn} alt='linkedin' /></a>
                        </div>
                    </div>
                    <div className='s7-top-links-container'>
                        <a className='s7-top-name s7-repo' href='https://github.com/EriscordAppacademyProject/Eriscord' target="_blank">
                            <div>Eriscord</div>
                            <div>GitHub Repo</div>
                        </a>
                    </div>
                </div>
                <div id='dot'> · </div>
                <div className="home-page-section-7-bottom">
                    <div className="hps1-nav-bar-section-left">
                        <img src={eriscord_black_logo} id="logo-img" alt="home-img" />
                        <div id='logo-name'>Eriscord</div>
                    </div>
                    <div className="hps1-nav-bar-section-right">
                        <NavLink to={"/sign-up"}>
                            <button id="home-login-button">Sign up</button>
                        </NavLink>
                    </div>
                </div>
            </div>
        </div>
    )
}




export default HomePage;
