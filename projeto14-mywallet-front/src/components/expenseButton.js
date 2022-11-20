import styled from "styled-components"

export default function ExpensesButton ({type}){
    return(
        <Container>
            
            {type === "plus" ? 
                <Button>
                    <img src='./img/plus.png' />
                    <p>Nova entrada</p>
                </Button>
            : 
                <Button>
                    <img src='./img/minus.png' />
                    <p>Nova saída</p>
                </Button>
            }
            
        </Container>
    )
}

const Container = styled.div`
    width: 45%;
    height: 80%;
    display: flex;
    justify-content: space-around;
`

const Button = styled.button`
    width: 100%;
    height: 100%;
    border-radius: 5px;
    border: none;
    background: #A328D6;
    display: block;
    align-items: stretch;

    p{
        font-family: Raleway;
        font-size: 17px;
        font-weight: 700;
        color: white;
    }
`