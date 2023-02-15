import "../styles.scss"

export default function Search(){
    return(
        <div className="search">
            <div className="searchForm">
                <input placeholder="Find users"/>
            </div>

            <div className="userChat">
                <img src="https://images.pexels.com/photos/3605015/pexels-photo-3605015.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" className="" />
                <div className="userChatInfo">
                    <span className="userName">Gugs</span>
                </div>
            </div>

        </div>
    )
}