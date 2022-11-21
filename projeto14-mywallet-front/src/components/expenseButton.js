import styled from "styled-components"
import { useNavigate } from "react-router-dom";

export default function ExpensesButton ({type}){

    const navigate = useNavigate()

    return(
        <Container>
            
            {type === "plus" ? 
                <Button onClick={() => navigate("/Transaction")}>
                    <ion-icon name="add-circle-outline"/>
                    <p>Nova entrada</p>
                </Button>
            : 
                <Button onClick={() => navigate("/Transaction")}>
                    <ion-icon name="remove-circle-outline" />
                    <p>Nova saída</p>
                </Button>
            }
            
        </Container>
    )
}

const Container = styled.div`
    width: 48%;
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
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    p{
        padding-bottom: 12px;
        padding-left: 6px;
        font-family: Raleway;
        font-size: 17px;
        font-weight: 700;
        color: white;
    }

    ion-icon {
        padding-top: 12px;
        padding-left: 6px;
        color: white;
        font-size: 24px;
    }
`