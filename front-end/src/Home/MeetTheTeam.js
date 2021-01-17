import React from 'react';
import { Link } from 'react-router-dom';

export default function MeetTheTeam() {

    return(
        <>
            <nav>
                <Link to='/'> Home </Link>
                <Link to='/login'> Log In </Link>
                <Link to='/signup'> Sign Up</Link>
                <Link to='/about'> About Us </Link>
                <Link to='/team'> Meet the Team </Link>
            </nav>
            <body>
                <section className="meetTeamIntro">
                <h1>Meet the Team</h1>
                </section>

                <section className="teamBioContainer">
                    <div className="bioOne">
                        <h2>
                            David Chang
                        </h2>
                        <p>
                            Java Backend Developer & React JS Frontend Developer
                        </p>
                    </div>

                    <div className="bioTwo">
                        <h2>
                            Seth Bradshaw
                        </h2>
                        <p>
                            Backend Developer & React JS Frontend Developer
                        </p>
                    </div>

                    <div className="bioThree">
                        <h2>
                            Nate Davis
                        </h2>
                        <p>
                            UI & UX Developer
                        </p>
                    </div>

                    <div className="bioFour">
                        <h2>
                            Elijah Elliott
                        </h2>
                        <p>
                            React JS Frontend Developer
                        </p>
                    </div>
                </section>
            </body>
        </>
    )
}
