import React from 'react';
import { Link } from 'react-router-dom';

export default function About() {

    return(
        <div>
            <nav>
                <Link to='/'> Home </Link>
                <Link to='/login'> Log In </Link>
                <Link to='/signup'> Sign Up</Link>
                <Link to='/about'> About Us </Link>
                <Link to='/team'> Meet the Team </Link>
            </nav>
            <h1>
                About Us
            </h1>
            <h2>
                Our Mission
            </h2>
            <p>
                We are dedicated to creating a relaible, fully functioning application for you to stay connected to your community and fix the issues that mean the most to you all.
            </p>
        </div>
    )};
