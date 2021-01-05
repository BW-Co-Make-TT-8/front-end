import react from 'react';
import { Link } from 'react-router-dom';

export default function MeetTheTeam() {

    return(
        <>
            <nav>
                <a><Link to='/'>Home</Link></a>
                <a><Link to='/login'>Log-In</Link></a>
                <a><Link to='/about'>About Us</Link></a>
            </nav>
        </>
    )
}