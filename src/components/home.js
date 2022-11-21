import styled from "styled-components"
import ExpensesButton from "./expenseButton";
import ExpensesBoard from "./expensesBoard";
import UserHeader from './userHeader';

export default function Home (){

    const Temp = localStorage.getItem("User_Info")
    const UserData = JSON.parse(Temp)

    return (
        <Container>
            <UserHeader user={UserData.name}/>

            <ExpensesBoard email={UserData.email}>

            </ExpensesBoard>

            <FootButtons>
                    <ExpensesButton type="plus" />
                    <ExpensesButton type="minus"/>
            </FootButtons>
            
        </Container>
    )
}

const Container = styled.div`
    background-color: #8C11BE;
    width: 100%;
    height: 100vh;
    display: block;
    justify-content: center;
    align-items: center;
`

const FootButtons = styled.div`
    height: 20%;
    padding-left: 5%;
    padding-right: 5%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`