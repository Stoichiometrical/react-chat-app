import "../styles.scss"

//This component is can be customized furthur to represent a message in the app
export default function Message(){
    return(
        <div className="message owner">
          <div className="messageInfo">
              <img src="https://images.pexels.com/photos/1065084/pexels-photo-1065084.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Missing" />
              <span>just now</span>
          </div>
          <div className="messageContent">
              <p>Hello</p>
              <img src="https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Missing"/>

          </div>
        </div>
    )
}