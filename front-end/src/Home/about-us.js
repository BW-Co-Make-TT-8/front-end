import React from 'react';
import { Link } from 'react-router-dom';

export default function About() {

    return(
        <>
            <h1>
                About Us
            </h1>
            <h2>
                Our Mission
            </h2>
            <p>
                We are dedicated to creating a relaible, fully functioning application for you to stay connected to your community and fix the issues that mean the most to you all.
            </p>

            <nav>
                <a><Link to='/'>Home</Link></a>
                <a><Link to='/login'>Log-In</Link></a>
                <a><Link to='/team'>Meet the Team</Link></a>
            </nav>
        </>
    )
}