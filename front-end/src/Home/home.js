import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledNav = styled.nav `
    display: flex;
    justify-content: space-between;
    align-items: center;

`
const StyledA = styled.a `

`

const BodyDiv = styled.div `

    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";

    h1 {
        font-weight: bold;
        font-size: 72px;
        text-align: center;
        letter-spacing: -0.5px;
        color: #333333;
        span {
            background: -webkit-linear-gradient(45deg, #4FCABF, #7350CC);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        }
    }
    p {
        font-weight: 400;
        font-size: 24px;
        text-align: center;
        letter-spacing: -0.5px;
        color: #808080;
        margin: 0 auto;
        max-width: 840px;
    }
`

function Home () {

    return (
        <>
            <div>
                <StyledNav>
                    <StyledA><Link to='/'>Home</Link></StyledA>
                    <StyledA><Link to='/login'>Log-In</Link></StyledA>
                    <StyledA><Link to='/about'>About Us</Link></StyledA>
                    <StyledA><Link to='/team'>Meet the Team</Link></StyledA>
                </StyledNav>
            </div>
            <BodyDiv>
                <h1>Change Your <span>Community</span><br /> with Co-Make!</h1>
                <div>
                    <p>With Co-make you can make your voice heard on the issues you would like to see resolved in your community. </p>
                    <img 
                        src="" 
                        alt='fits with the company description'
                    />
                </div>
            </BodyDiv>
        </>

    )
}

export default Home;