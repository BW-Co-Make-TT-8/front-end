import React from 'react';
import { Route, Link } from 'react-router-dom';
import Login from '../Registration/login'; // link to sign up will be in the login page
import About from './about-us';
import MeetTheTeam from './meet-the-team';

function Home () {

    return (
        <>
            <div>
                <nav>
                    <ul>
                        {/* <li><Link to='/'>Home</Link></li> */}
                        <li><Link to='/login'>Log-In</Link></li>
                        <li><Link to='/about'>About Us</Link></li>
                        <li><Link to='/team'>Meet the Team</Link></li>

                        {/* <Route path='/' component={Home} /> */}
                        <Route path='/login' component={Login} />
                        <Route path='/about' component={About} />
                        <Route path='/team' component={MeetTheTeam} />
                    </ul>
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