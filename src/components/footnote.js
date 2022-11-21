import styled from 'styled-components';

export default function Footnote({props}){
    return (
        <Footertext>
                    <p>{props}</p>
        </Footertext>
    )
};

const Footertext = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 25px;
    p{
        color: white;
        font-family: raleway;
        font-size: 18px;
        font-weight: 700;
    }
`