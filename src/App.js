import Register from "./pages/Register";
import Login from "./pages/Login";
import Home from "./pages/Home";
import {BrowserRouter, Routes,  Route} from "react-router-dom"


export default function App(){
    return(
        <>
            {/*Setting up application routes*/}
            <BrowserRouter>
                <Routes>
                    <Route exact path ="" element={ <Home/> }/>
                    <Route  path ="/login" element={ <Login/>} />
                    <Route path ="/register" element={ <Register/> } />
                </Routes>
            </BrowserRouter>

        </>
    )
}