import styled from "styled-components"

export default function FooterRegister({ saldo }) {
    return (
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
                    {saldo * -1}
                </h3>
            }
        </Footer>
    )
}

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