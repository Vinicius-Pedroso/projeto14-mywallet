import Login from "./components/login";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Signup from "./components/signup";
import Home from "./components/home";
import NewTransaction from "./components/newTransaction";


export default function app (){

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login/>}></Route>
                <Route path="/Signup" element={<Signup/>}/>
                <Route path="/Home" element={<Home />}/>
                <Route path="/Transaction/:idPlan" element={<NewTransaction />}/>
            </Routes>
        </BrowserRouter>
    )
}