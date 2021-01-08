import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Navbar from '../Components/Navbar';
import LandingSrc from '../Utils/Pictures/landing-image.png';



const LandingImage = styled.img`
    max-width: 876px;
    margin: 0 auto !important;
    padding-top: 72px;
    display: grid;
`;

const BodyDiv = styled.div `
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";

    h1 {
        margin-top: 80px;
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
            <Navbar />

            </div>
            <BodyDiv>
                <h1>Change Your <span>Community</span><br /> with Co-Make!</h1>
                <div>
                    <p>With Co-Make you can make your voice heard on the issues you would like to see resolved in your community. </p>
                </div>
                
                    <LandingImage src={LandingSrc} />
                
            </BodyDiv>
        </>

    )
}

export default Home;


