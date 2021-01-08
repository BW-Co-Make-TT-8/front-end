import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledNav = styled.nav `
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 24px 10%;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    
`

const StyledLink = styled(Link)`
    text-decoration: none;
    color: #212529;
    font-size: 20px;
    font-weight: bold;

`;

const LogIn = styled(Link)`
    text-decoration: none;

    font-weight: 600;
    font-size: 16px;
    line-height: 19px;
    letter-spacing: -0.5px;
    color: #333333;
`;

const SignUp = styled(Link)`
    text-decoration: none;
    margin-left: 16px;
    padding: 10.5px 12px;
    background: #6039B7;
    border-radius: 6px;
    color: #fff;
`;

function Navbar () {

    return (
        <>
            <div>
                <StyledNav>
                    <div>
                        <StyledLink to='/'>Co-Make</StyledLink>
                    </div>
                    <div>
                        <LogIn to='/login'>Log In</LogIn>

                        <SignUp to='/signup'>Sign Up</SignUp>
                    </div>
                </StyledNav>
            </div>
        </>

    )
}

export default Navbar;