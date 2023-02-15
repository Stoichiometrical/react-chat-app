import "../styles.scss"
import {useNavigate} from "react-router-dom";

export default function Login(){
    const login = useNavigate()
    const loggin = ()=>{
        login("")
    }
    const signup = useNavigate()
    const signingup = ()=>{
        signup("/register")
    }
    return(
        <div className="formContainer">

            <div className="formWrapper">
                <span className="logo">SMT Chat App</span>
                <span className="title">Log In</span>
                <form action="">
                    <input type="email" placeholder="email" className="input" />
                    <input type="password" placeholder="password" className="input" />
                    <button onClick={loggin} >Log In</button>
                </form>
                <p className="text" onClick={signingup}>Don't have an account?Sign Up</p>
            </div>
        </div>
    )
}