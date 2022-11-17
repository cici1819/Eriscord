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
    if (servers) {
        let currentServer = servers.find(server => server?.id == serverId)
        // console.log("CURRENT SERVER IN DMS", currentServer)
        name = currentServer?.name
    }

    return (
        <>

            <div className='select-setting' onClick={openMenu}>
                <span className='username'>
                    {name}
                </span>
                <span className='arrow-icon' >
                    {/* <img className="arrow-img" src={selectMenuIcon} /> */}
                    <i className="fa-solid fa-chevron-down"></i>
                </span>

            </div>

            {showMenu && (
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
