import styled from 'styled-components';

export default function Header (){
    return (
        <Logo>
            <p>My Wallet</p>
        </Logo>
    )
}

const Logo = styled.div`
    background-color: #0E0E13;
    padding-top: 100px;
    display:flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 50px;

    p{
        font-family: Saira Stencil One;
        font-size: 32px;
        font-weight: 400;
    }
`