import styled from 'styled-components'
import Header from './header';
import { useState} from 'react';
import Largebutton from './largebutton';
import Footnote from './footnote';
import React from 'react'

export default function Login (){

    const [password, setPassword] = useState("")
    const [email, setEmail] = useState("")
    
    return (
        <Container>

            <Header></Header>

            <Center>
                <Buttonregistry type='text' placeholder="E-mail" value={email} onChange={e => setEmail(e.target.value)}/>
            </Center>
            <Center>
                <Buttonregistry type='text' placeholder="senha" value={password} onChange={e => setPassword(e.target.value)}/>
            </Center>

            <Largebutton props={"Entrar"}/>
            <Footnote props={"Primeira vez? Cadastre-se!"}/>

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