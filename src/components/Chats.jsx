import "../styles.scss"

export default function Chats(){
    return(
        <div className="chats">
            <div className="userChat">
                <img src="https://images.pexels.com/photos/3605015/pexels-photo-3605015.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" className="" />
                <div className="userChatInfo">
                    <span className="userName">Gugs</span>
                    <span className="text">Hey David</span>
                </div>
            </div>

            <div className="userChat">
                <img src="https://images.pexels.com/photos/712513/pexels-photo-712513.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" className="" />
                <div className="userChatInfo">
                    <span className="userName">Mary</span>
                    <span className="text">Hey David.Did you finish ?</span>
                </div>
            </div>

            <div className="userChat">
                <img src="https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" className="" />
                <div className="userChatInfo">
                    <span className="userName">Benson</span>
                    <span className="text">On my way</span>
                </div>
            </div>

            <div className="userChat">
                <img src="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" className="" />
                <div className="userChatInfo">
                    <span className="userName">Eva</span>
                    <span className="text">Okay</span>
                </div>
            </div>

        </div>
    )
}