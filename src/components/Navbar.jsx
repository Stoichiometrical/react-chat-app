import "../styles.scss"
import { useNavigate } from "react-router-dom"

export default function Navbar(){
    const logout = useNavigate()
    const loggingOut =()=>{
        logout('/login')
    }
    return(
        <div className="navbar">
            <span className="logo">SMT</span>
            <div className="navItems">
                <img className="navImg" alt="Missing"  src="https://images.pexels.com/photos/1308885/pexels-photo-1308885.jpeg?auto=compress&cs=tinysrgb&w=600"/>
                <span className="navItemName">David Eagles</span>
                <button className="logout" onClick={loggingOut}>Logout</button>
            </div>

        </div>
    )
}