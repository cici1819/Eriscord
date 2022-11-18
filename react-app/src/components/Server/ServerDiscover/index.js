function ServerDiscover() {
    const dispatch = useDispatch();
    const { channelId, serverId } = useParams();
    const history = useHistory();
    let servers = useSelector(state => state.server.servers)

    useEffect(() => {
        dispatch(getAllServers())
    }, [dispatch]);


    // console.log(channelId, serverId)

    // console.log('servers!!!!!!!!', servers)

    if (!servers) { return null }
    // const dmRedirect = () => {
    //     history.push("/channels/@me")
    // }
    console.log (servers)
    return (
        <>
            <div className="server-discover-map">
                {servers?.map((server) => {
                    return (
                        <div>
                            {server.name},
                        </div>
                    )
                })}

            </div>

        </>
    )
}
export default ServerDiscover
