import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory, useParams } from 'react-router-dom';
import "../MainPage/MainPage.css"

const ServerSetting = ({ setShowServerEditModal, setShowServerDeleteModal }) => {
    const dispatch = useDispatch()
    const sessionUser = useSelector((state) => state.session.user);
    const servers = useSelector(state => state.server.servers)
    const { serverId } = useParams()
    // let [showMenu, setShowMenu] = useState(false)
    // const dispatch = useDispatch()
    let [showMenu, setShowMenu] = useState(false)

    const openMenu = () => {
        if (showMenu) return;
        else setShowMenu(true);
    }

    useEffect(() => {
        if (!showMenu) return;

        const closeMenu = () => {
            setShowMenu(false);
        };

        document.addEventListener('click', closeMenu);

        return () => document.removeEventListener("click", closeMenu);
    }, [showMenu]);
    if (!sessionUser) {
        return null;
    }


    let name
    let sessionUserIsOwner = false
    if (servers) {
        let currentServer = servers.find(server => server?.id == serverId)
        if (currentServer){
            name = currentServer?.name
            // console.log("current SERVER ",currentServer)
            sessionUserIsOwner = currentServer.owner_id==sessionUser.id
            // console.log ("owned by you?" , sessionUserIsOwner)
        }
    }

    return (
        <>

            <div className='select-setting' onClick={openMenu}>
                <span className='username'>
                    {name}
                </span>
                {sessionUserIsOwner &&
                <span className='arrow-icon' >
                    {/* <img className="arrow-img" src={selectMenuIcon} /> */}
                    <i className="fa-solid fa-chevron-down"></i>
                </span>
}

            </div>

            {showMenu && sessionUserIsOwner && (
                <div className='server-setting-dropMenu'>
                    <div className='server-e-wapper'>
                    <div className='server-edit-div'
                        onClick={() => {

                            // console.log("loginon click running````````````")
                            setShowServerEditModal(true)
                        }
                        }
                    >
                        <span className='s-e-t'>
                            Server Edit
                        </span>
                        <span className='s-e-icon'>
                            <i className="fa-solid fa-pencil"></i>
                        </span>
                    </div>
                    </div>
                    <div className='server-delete-div'
                        onClick={() => {

                            // console.log("showServerEditModal clickruning!!!!!!!!!!!")

                            setShowServerDeleteModal(true)

                        }}
                    >
                        <span>
                            Server Delete
                        </span >
                        <span>
                            <i className="fa-solid fa-trash-can"></i>
                        </span>

                    </div>


                </div>)}


        </>
    )
}


export default ServerSetting;
