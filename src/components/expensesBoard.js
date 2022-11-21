import styled from "styled-components"
import NoRegister from "./noRegister"
import Register from "./register"
import { useState, useEffect } from "react"
import axios from 'axios'
import FooterRegister from "./footerRegister"

export default function ExpensesBoard({email}) {

    let haveResister = false

    const [transactions, setTransaction] = useState([])

    useEffect(() => {
        const request = axios.get("http://localhost:5000/Transactions", {
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
                <ExpensesList>
                {haveResister ?
                    <Register date={"Hoje"} description={"Café da manhã"} value={-13.95}></Register>
                    :
                    <></>
                }
                </ExpensesList>
                {haveResister ?
                    <FooterRegister saldo={-13.95}/>
                    :
                    <></>
                }
                {!haveResister ?
                    <NoRegister></NoRegister>
                    :
                    <></>
                }
                
            </Board>
        </Container >
    )
}

//  maps not working
// {transactions.map(line => (
//     <Register date={line.date} description={line.description} value={line.value}></Register>
// ))}

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