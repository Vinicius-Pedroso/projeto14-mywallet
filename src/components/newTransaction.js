import styled from "styled-components"
import dayjs from 'dayjs'
import axios from 'axios'
import { useState} from 'react';
import {useNavigate} from 'react-router-dom'
import { useParams } from 'react-router-dom'

export default function NewTransaction (){

    let type = "saída"
    let positiveTransaction = false

    const Temp = localStorage.getItem("User_Info")
    const UserData = JSON.parse(Temp)

    if (useParams().idPlan === "entrada"){
        positiveTransaction = true
        type = "entrada"
    }
    
    const [value, setValue] = useState("")
    const [description, setDescription] = useState("")
    const navigate = useNavigate()

    function AddTransaction (){

        const email = UserData.email
        const date = dayjs().format('D/M')
        let tempvalue = value

        if (!positiveTransaction){
            tempvalue = tempvalue*-1
        }

        const transactionData = axios.post(`http://localhost:5000/Transaction`, {
            date: date,
            description: description,
            value: tempvalue
        }, {
            headers: {
                user: email
            }
        })

        transactionData.then(response => {
            console.log(response.data)
                navigate("/Home")
        })
        transactionData.catch(error => {
            console.log(error)
            alert("Não foi possível registrar a transação")
        })

    }

    return (
        <Container>

            <p>Nova {type}</p>

            <Buttonregistry type='text' placeholder="Valor" value={value} onChange={e => setValue(e.target.value)}/>
            <Buttonregistry type='text' placeholder="Descrição" value={description} onChange={e => setDescription(e.target.value)}/>
            
            <Buttonenter onClick={AddTransaction}><h1>Salvar {type}</h1></Buttonenter>

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
    padding-top: 15px;

    h1 {
        padding-bottom: px;
        display: flex;
        justify-content: center;
        align-items: center;
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