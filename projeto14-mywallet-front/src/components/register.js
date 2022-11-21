import styled from "styled-components"

export default function Register (){

    let saldo = 5.65
    return (
        <Container>

            <ExpensesList>
                <TransactionLine>
                    <h1>hoje</h1><h2>Pão</h2><h3>999.99</h3>
                </TransactionLine>
            </ExpensesList>

            <Footer>
                <h1>
                    SALDO
                </h1>
                {saldo >= 0 ?
                        
                    <h2>
                        {saldo}
                    </h2>
                :
                    <h3>
                        {saldo*-1}
                    </h3>
                }
            </Footer>

        </Container>
    )
}

const ExpensesList = styled.div`
    height: 95%;
    display: block;

    h1{
        color: black;
    }

`
const TransactionLine = styled.div`
    padding-top: 10px;
    display: flex;
    justify-content: space-between;

    h1 {
        font-family: Raleway;
        font-size: 16px;
        font-weight: 400;
        color: #c6c6c6;
    }

    h2 {
        font-family: Raleway;
        font-size: 16px;
        font-weight: 400;
        color: black;
    }

    h3 {
        font-family: Raleway;
        font-size: 16px;
        font-weight: 400;
        color: #C70000;
    }
`

const Container = styled.div`
    padding-left: 5%;
    padding-right: 5%;
    height: 100%;
`

const Footer = styled.div`
    height: 5%;
    padding-bottom: 5px;
    display: flex;
    justify-content: space-between;

    h1 {
        font-family: Raleway;
        font-size: 17px;
        font-weight: 700;
        color: black;
    }

    h2{
        font-family: Raleway;
        font-size: 17px;
        font-weight: 400;
        color: #03AC00;
    }

    h3{
        font-family: Raleway;
        font-size: 17px;
        font-weight: 400;
        color: #C70000;
    }
`