import "../styles.scss"
import Messages from "./Messages";
import Input from "./Input";

export default function Chat(){
    return(
        <div className="chat">
            <div className="chatInfo">
                <span className="chatInfoName">Gugu</span>
                <div className="chatIcons">
                    <img src="img/vid.png" alt="Missing"  />
                    <img src="img/friend.png" alt="Missing"  />
                    <img src="img/more.png" alt="Missing" />
                </div>
            </div>
            <Messages/>
            <Input/>
        </div>
    )
}