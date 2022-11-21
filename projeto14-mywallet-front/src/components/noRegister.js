import styled from "styled-components"

export default function NoRegister (){
    return(
        <Container>
            <p>Não há registros de entrada ou saída</p>
        </Container>
    )
}

const Container = styled.div`
    padding-left: 10%;
    width: 80%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    p{
        font-family: Raleway;
        font-size: 20px;
        font-weight: 400;
        color: #868686;
    }
`