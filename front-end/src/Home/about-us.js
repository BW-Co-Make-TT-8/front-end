import React from 'react';
import { Link } from 'react-router-dom';

export default function About() {

    return(
        <>
            <h1>
                About
            </h1>
            <h2>
                Our Mission
            </h2>
            <p>
                Text about our mission will go here lol
            </p>

            <nav>
                <a><Link to='/'>Home</Link></a>
                <a><Link to='/login'>Log-In</Link></a>
                <a><Link to='/team'>Meet the Team</Link></a>
            </nav>
        </>
    )
}