import styled from "styled-components"

export default function Register ({date, description, value}){

    return (
        <Container>


                <TransactionLine>
                    <h1>{date}</h1>
                    <h2>{description}</h2>
                    {value >= 0 ?
                        <h3>{value}</h3>
                    :
                        <h4>{value*-1}</h4>
                    }
                </TransactionLine>

        </Container>
    )
}

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

    h3{
        font-family: Raleway;
        font-size: 17px;
        font-weight: 400;
        color: #03AC00;
    }

    h4 {
        font-family: Raleway;
        font-size: 16px;
        font-weight: 400;
        color: #C70000;
    }
`

const Container = styled.div`
    padding-left: 5%;
    padding-right: 5%;
`