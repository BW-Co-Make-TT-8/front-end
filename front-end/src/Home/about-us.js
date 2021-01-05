import React from 'react';
import { Link } from 'react-router-dom';

export default function About() {

    return(
        <>
            <nav>
                <a><Link to='/'>Home</Link></a>
                <a><Link to='/login'>Log-In</Link></a>
                <a><Link to='/team'>Meet the Team</Link></a>
            </nav>
        
        </>
    )
}