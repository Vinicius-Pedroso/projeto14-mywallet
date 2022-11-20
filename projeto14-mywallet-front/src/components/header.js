import styled from 'styled-components';

export default function Header (){
    return (
        <Logo>
            <p>My Wallet</p>
        </Logo>
    )
}

const Logo = styled.div`
    padding-top: 100px;
    display:flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 50px;

    p{
        color: white;
        font-family: Saira Stencil One;
        font-size: 32px;
        font-weight: 400;
    }
`