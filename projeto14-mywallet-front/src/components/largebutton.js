import styled from 'styled-components'

export default function Largebutton (props){
    return (
        <Buttonenter >
                <p>{props}</p>
        </Buttonenter>
    )
}

const Buttonenter = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 40px;
    p {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 326px;
        height: 46px;
        background-color: #FF4791;
        border: none;
        border-radius: 5px;
        color: white;
        font-family: raleway;
        font-size: 20px;
        font-weight: 700;
    }
`