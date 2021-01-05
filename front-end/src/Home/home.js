import React from 'react';
import { Link } from 'react-router-dom';


function Home () {

    return (
        <>
            <div>
                <nav>
                    <a><Link to='/'>Home</Link></a>
                    <a><Link to='/login'>Log-In</Link></a>
                    <a><Link to='/about'>About Us</Link></a>
                    <a><Link to='/team'>Meet the Team</Link></a>
                </nav>
            </div>
            <div>
                <h1>What we are dedicated to</h1>
                <div>
                    <p>Here we can fill in some description of the company, I'm not about to do this now so someone fill this in pls.</p>
                    <img 
                        src='' 
                        alt='fits with the company description'
                    />
                </div>
            </div>
        </>

    )
}

export default Home;