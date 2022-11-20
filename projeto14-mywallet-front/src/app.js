import Login from "./components/login";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState} from 'react';
import Signup from "./components/signup";
import Home from "./components/home";
import NewTransaction from "./components/newTransaction";


export default function app (){

    const [transactionType, setTransactiontype] = useState("")

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login/>}></Route>
                <Route path="/Signup" element={<Signup/>}/>
                <Route path="/Home" element={<Home setTransactionType={setTransactiontype}/>}/>
                <Route path="/Transaction" element={<NewTransaction type={transactionType}/>}/>
            </Routes>
        </BrowserRouter>
    )
}