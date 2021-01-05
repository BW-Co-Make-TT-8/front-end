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
                <h1>Change Your Community with Co-Make!</h1>
                <div>
                    <p>Ever get frustrated that a problem in your town or neighborhood goes ages without being resolved? With Co-make you can make your voice heard on the issues you would like to see resolved in your community. </p>
                    <img 
                        src="" 
                        alt='fits with the company description'
                    />
                </div>
            </div>
        </>

    )
}

export default Home;