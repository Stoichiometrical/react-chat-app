import Sidebar from "../components/Sidebar";
import Chat from "../components/Chat";
import "../styles.scss"
import Search from "../components/Search";

//This is the main display of the app
export default function Home(){
    return(
        <>
            <div className="home">
                <div className="container">
                   <Sidebar/>

                    <Chat/>
                </div>
            </div>
        </>


    )
}