import styled from "styled-components"

export default function Register (){

    let saldo = 5.65
    return (
        <Container>

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

const Container = styled.div`
    padding-left: 5%;
`

const Footer = styled.div`
    padding-top: 10px;
    padding-right: 5%;
    padding-bottom: 10px;
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