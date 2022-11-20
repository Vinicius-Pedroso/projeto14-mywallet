import styled from "styled-components"

export default function ExpensesBoard (){
    return (
        <Container>
            <Board>

            </Board>
        </Container>
    )
}

const Container = styled.div`
    height: 70%;
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    border-radius: 5;
`
const Board = styled.div`
    height: 100%;
    width: 90%;
    background-color: white;
    border: none;
    border-radius: 5;
`