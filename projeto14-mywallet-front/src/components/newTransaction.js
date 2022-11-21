import styled from "styled-components"
import { useState} from 'react';

export default function NewTransaction (){

    const transactionType = "saída"

    const [value, setValue] = useState("")
    const [description, setDescription] = useState("")

    return (
        <Container>

            <p>Nova {transactionType}</p>

            <Buttonregistry type='text' placeholder="Valor" value={value} onChange={e => setValue(e.target.value)}/>
            <Buttonregistry type='text' placeholder="Descrição" value={description} onChange={e => setDescription(e.target.value)}/>
            
            <Buttonenter>
                <p></p>
            </Buttonenter>

        </Container>
    )
}

const Container = styled.div`
    background-color: #8C11BE;
    width: 100%;
    height: 100vh;
    display: block;
    padding-left: 5%;

    p{
        font-family: Raleway;
        font-size: 26px;
        font-weight: 700;
        padding-top: 5%;
        color: white;
    }
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