import React, { useState } from "react";
// import { useParams } from "react-router";
import MessagesBox from "../RM/MessagesBox";
import { useSelector } from "react-redux";
// import ChatTest from "../chatTest";
import ChannelCreateModal from "../Channel/ChannelCreate";
// import ChannelEditModal from "../Channel/ChannelEdit"
import LogoutButton from "../auth/LogoutButton";
import './MainPage.css';
import CurrentUserServer from "../Server/CurrentUserServer";
import UsersInOneServer from "../Server/UsersInOneServer";
import ServerCreateModal from "../Server/ServerCreate";
import ServerSetting from "../Server/ServerSettingSelect";
import ServerDeleteModal from "../Server/ServerDelete";
import ChannelListInServer from "../Channel/ChannelListInServer";
import ServerEditModal from "../Server/ServerEdit";
import CurrentUserDm from "../DM/CurrentUserDM";
import DMBox from "../DM/DMBox";
import { useParams, useHistory } from 'react-router-dom';
import { channelAddMessage } from "../../store/messageReducer";



function MainPage(props) {
    const [showServerEditModal, setShowServerEditModal] = useState(false)
    const [showServerDeleteModal, setShowServerDeleteModal] = useState(false);
    const history = useHistory();
    // let sessionLinks;
    // if (sessionUser) {
    //     sessionLinks = (
    //         <>
    //             <ProfileButton user={sessionUser} />
    //         </>
    //     )
    // } else {
    //     sessionLinks = (
    //         <>

    //             <LoginButton
    //                 setShowLoginModal={setShowLoginModal}
    //                 setShowSignupModal={setShowSignupModal}
    //             />
    //         </>
    //     );
    // }
    const { dmShow } = props
    let messageShow;
    if (dmShow === false /*|| undefined*/) {
        messageShow = true
    }



    return (
        <div className="main-page-container">

            <div className="server-sidebar">
                <CurrentUserServer />
                <div className="server-plus">
                    <ServerCreateModal />
                </div>

                <div className='server-search-icon' onClick={() => history.push('/discover')}>
                    <i class="fa-sharp fa-solid fa-compass" id="server-search-logo"> </i>
                </div>

            </div>

            <div className="channel-or-DM-sidebar">
                {messageShow && <ServerSetting setShowServerEditModal={setShowServerEditModal}
                    setShowServerDeleteModal={setShowServerDeleteModal}
                />}
                {messageShow && <ServerEditModal showServerEditModal={showServerEditModal}
                    setShowServerEditModal={setShowServerEditModal}
                />}
                {messageShow && <ServerDeleteModal showServerDeleteModal={showServerDeleteModal}
                    setShowServerDeleteModal={setShowServerDeleteModal}
                />}

                <div className="mainPage-c-create">
                    {messageShow && <ChannelCreateModal />}
                </div>

                <div>
                    {messageShow && <ChannelListInServer />}
                    {dmShow && <CurrentUserDm />}
                    {/* {messageShow && <ChannelEditModal />} */}
                </div>

                <div>
                    <LogoutButton />
                </div>
            </div>
            <div>
                {messageShow &&
                    <div className="messages-container-rm">
                        <MessagesBox />
                    </div>
                }
                {dmShow &&
                    <>
                        <div className="messages-container-dm">
                            <DMBox />
                        </div>

                    </>
                }
                <div className="server-users-bar">
                    <div className="right-user-bar-top">

                    </div>
                    <UsersInOneServer />
                </div>
            </div>

        </div>
    )
}




export default MainPage;
