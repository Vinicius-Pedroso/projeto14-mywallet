import styled from 'styled-components'
import Header from './header';
import { useState, useEffect} from 'react';
import Footnote from './footnote';
import React from 'react'
import {Link, useNavigate} from 'react-router-dom'
import axios from 'axios';

export default function Login (){

    const [password, setPassword] = useState("")
    const [email, setEmail] = useState("")
    const navigate = useNavigate()

    function LoginUser (){

        const temp = {
            email: email,
            password: password
        }

        console.log(temp)

        const loginUserData = axios.post(`http://localhost:5000/`, {
            email: email,
            password: password
        }, {})

        loginUserData.then(response => {
            console.log(response.data)
                navigate("/Home")
        })
        loginUserData.catch(error => {
            console.log(error)
            alert("Não foi possível efetuar o login")
        })
    }

    return (
        <Container>

            <Header></Header>

            <Center>
                <Buttonregistry type='text' placeholder="E-mail" value={email} onChange={e => setEmail(e.target.value)}/>
            </Center>
            <Center>
                <Buttonregistry type='text' placeholder="senha" value={password} onChange={e => setPassword(e.target.value)}/>
            </Center>

            <Buttonenter onClick={LoginUser}><p>Entrar</p></Buttonenter>
            <Link to="/Signup">
                <Footnote props={"Primeira vez? Cadastre-se!"}/>
            </Link>
            
        </Container>
    )
};

const Container = styled.div`
    background-color: #8C11BE;
    width: 100%;
    height: 100vh;
    display: block;
    justify-content: center;
    align-items: center;
`

const Center = styled.div`
    display: flex;
    justify-content: center;
`

const Buttonregistry = styled.input`
    width: 326px;
    height: 58px;
    border: none;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 15px;
    ::placeholder {
        padding-left: 15px;
        font-family: Raleway;
        font-size: 20px;
        font-weight: 400;
    }
`

const Buttonenter = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 40px;
    p {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 326px;
        height: 46px;
        background-color: #A328D6;
        border: none;
        border-radius: 5px;
        color: white;
        font-family: raleway;
        font-size: 20px;
        font-weight: 700;
    }
`