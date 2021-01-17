import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledNav = styled.nav `
display: flex;
flex-direction: row;

`
const StyledA = styled.a `

`

const BodyDiv = styled.div `

`

function Home () {

    return (
        <>
            <div>
                <StyledNav>
                <StyledA><Link to='/'> Home </Link></StyledA>
                <StyledA><Link to='/login'> Log In </Link></StyledA>
                <StyledA><Link to='/signup'> Sign Up</Link></StyledA>
                <StyledA><Link to='/about'> About Us </Link></StyledA>
                <StyledA><Link to='/team'> Meet the Team </Link></StyledA>
                </StyledNav>
            </div>
            <BodyDiv>
                <h1>Change Your Community with Co-Make!</h1>
                <div>
                    <p>Ever get frustrated that a problem in your town or neighborhood goes ages without being resolved? With Co-make you can make your voice heard on the issues you would like to see resolved in your community. </p>
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
