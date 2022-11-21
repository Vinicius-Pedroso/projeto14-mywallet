import styled from "styled-components"
import NoRegister from "./noRegister"
import Register from "./register"
import { useState, useEffect } from "react"
import axios from 'axios'
import FooterRegister from "./footerRegister"

export default function ExpensesBoard({ email }) {

    let haveResister = false

    const [transactions, setTransaction] = useState([])

    useEffect(() => {
        const request = axios.get("http://localhost:5000/Transaction", {
            headers: {
                User: email
            }
        });
        request.then(setTransaction(request));
    }, [])

    console.log(transactions)
    if (transactions.length > 0) {
        haveResister = true
    }

    return (
        <Container>
            <Board>

                < ExpensesList >
                    <Register date={"Hoje"} description={"Café da manhã"} value={-13.95}>
                    </Register>
                    <Register date={"Hoje"} description={"Salário"} value={4000}>
                    </Register>
                    <Register date={"Hoje"} description={"Tarde com os amigos"} value={-58.54}>
                    </Register>
                </ExpensesList >

                <FooterRegister saldo={3927.51} >
                </FooterRegister>

            </Board>
        </Container >
    )
}

// const register = true

//     < ExpensesList >

//     <Register date={"Hoje"} description={"Café da manhã"} value={-13.95}>

//     </Register>

// </ExpensesList >

// <FooterRegister saldo={-13.95}/>
                    
// <NoRegister></NoRegister>

const Container = styled.div`
    padding-left: 5%;
    height: 70%;
    width: 90%;
    display: flex;
    justify-content: center;
    align-items: center;
`

const ExpensesList = styled.div`
    height: 95%;
    display: block;

`

const Board = styled.div`
    height: 100%;
    width: 100%;
    background-color: white;
    border: none;
    border-radius: 5px;
    display: block;
    justify-content: center;
`