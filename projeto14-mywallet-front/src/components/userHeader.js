import styled from "styled-components"

export default function UserHeader ({user}){
    return (
        <Container>
            <p>Olá, {user}</p>
            <img src='./img/leave.png' />
        </Container>
    )
};

const Container = styled.div`
    height: 10%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;

    p{
        padding-left:  5%;
        font-family: Raleway;
        font-size: 26px;
        font-weight: 700;
        color: white;
    }

    img {
        padding-right: 5%;
    }
`