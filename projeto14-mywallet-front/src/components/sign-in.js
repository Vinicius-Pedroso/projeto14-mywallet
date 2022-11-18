import styled from 'styled-components'
import largebutton from './largebutton'
import footnote from './footnote'
import { useState, useEffect } from 'react';

export default function SignIn (){

    const [password, setPassword] = useState("")
    const [email, setEmail] = useState("")
    const [passwordConfirm, setPasswordConfirm] = useState("")
    const [name, setName] = useState("")

    return (
        <Container>

            <Header></Header>

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

            <largebutton></largebutton>
            <footnote></footnote>

        </Container>
    )
};

const Container = styled.div`
    background-color: #A328D6;
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