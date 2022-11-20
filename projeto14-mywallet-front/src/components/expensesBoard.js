import styled from "styled-components"
import NoRegister from "./noRegister"
import Register from "./register"

export default function ExpensesBoard (){

    const HaveThings = true
    return (
        <Container>
            <Board>

                {HaveThings === true ? 
                    <Register/>
                :
                    <NoRegister/>
                }

            </Board>
        </Container>
    )
}

const Container = styled.div`
    padding-left: 5%;
    height: 70%;
    width: 90%;
    display: flex;
    justify-content: center;
    align-items: center;
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