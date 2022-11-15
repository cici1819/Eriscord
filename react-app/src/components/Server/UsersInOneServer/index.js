import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from "react-router";
import { thunkLoadOneServer } from "../../../store/serverReducer";
import OneUserInfo from "./OneUserDropDown";
import './UsersInOneServer.css';


function UsersInOneServer() {
    const dispatch = useDispatch();
    // const [memberDetail, setMemberDetail] = useState(false);
    const { serverId } = useParams();

    // const showMemberDetail = () => {
    //     if (memberDetail) return;
    //     setMemberDetail(true);
    // };


    useEffect(() => {
        dispatch(thunkLoadOneServer(serverId))
    }, [dispatch]);


    // console.log(channelId, serverId)
    let currentServer = useSelector(state => state.server)
    let usersInCurrentServer = useSelector(state => state.server[+serverId]?.users)

    // console.log('usersInCurrentServer!!!!!!!!', usersInCurrentServer)

    // console.log('channelArr!!!!!!!!', channelArr)

    if (!usersInCurrentServer) { return null }

    if (!currentServer || currentServer[+serverId].is_dm) return (<>
    </>

    )


    return (
        <div className="main-page-server-members-container">

            <div className="members-list-title">
                MEMBERS - {usersInCurrentServer.length}
            </div>
            <div className="members-list-container">
                {usersInCurrentServer?.map((user) => <OneUserInfo key={user.id} user={user} />)}
            </div>
        </div>
    )
}


export default UsersInOneServer;



{/* <div className='single-member-container' key={user?.id} >
                        <img src={eriscord_clear_logo} id="logo-img" style={{ backgroundColor: user?.color }} alt="home-img" />

                        <div className='review-name'>{user?.username}</div>

                    </div> */}
