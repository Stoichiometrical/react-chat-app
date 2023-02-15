import "../styles.scss"
import Message from "./Message";

///This component is a collection of messages that can be found in a chat
export default function Messages(){
    return(
        <div className="messages">
            <Message/>
            <Message/>
            <Message/>
            <Message/>
            <Message/>



        </div>
    )
}