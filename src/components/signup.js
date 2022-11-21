import styled from 'styled-components'
import Footnote from './footnote'
import Header from './header'
import React from 'react'
import { useState} from 'react';
import { useNavigate, Link } from 'react-router-dom'
import axios from 'axios';

export default function Signup (){

    const [password, setPassword] = useState("")
    const [email, setEmail] = useState("")
    const [passwordConfirm, setPasswordConfirm] = useState("")
    const [name, setName] = useState("")
    const navigate = useNavigate()

    function SignUser() {

        const newUser = {
            name: name,
            email: email,
            password: password,
            passwordConfirm: passwordConfirm
        }

        const signUserData = axios.post('http://localhost:5000/Signup',newUser, {})

        signUserData.then(response => {
            console.log(response.data)
                navigate("/")
        })
        signUserData.catch(error => {
            console.log(error)
        })
    }

    return (
        <Container>

            <Header></Header>

            <form>
            <Center>
                <Buttonregistry type='text' placeholder="Nome" value={name} onChange={e => setName(e.target.value)}/>
            </Center>
            <Center>
                <Buttonregistry type='text' placeholder="E-mail" value={email} onChange={e => setEmail(e.target.value)}/>
            </Center>
            <Center>
                <Buttonregistry type='text' placeholder="Senha" value={password} onChange={e => setPassword(e.target.value)}/>
            </Center>
            <Center>
                <Buttonregistry type='text' placeholder="Confirme a senha" value={passwordConfirm} onChange={e => setPasswordConfirm(e.target.value)}/>
            </Center>
            </form>

            <Buttonenter onClick={SignUser}><p>Cadastrar</p></Buttonenter>
            <Link to="/">
                <Footnote props={"Já tem uma conta? Entre agora!"} />
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