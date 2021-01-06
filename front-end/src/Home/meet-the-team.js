import React from 'react';
import { Link } from 'react-router-dom';

export default function MeetTheTeam() {

    return(
        <>
            <nav>
                <a><Link to='/'>Home</Link></a>
                <a><Link to='/login'>Log-In</Link></a>
                <a><Link to='/about'>About Us</Link></a>
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
                            Backend Developer
                        </p>
                    </div>

                    <div className="bioTwo">
                        <h2>
                            Seth Bradshaw
                        </h2>
                        <p>
                            Backend Developer
                        </p>
                    </div>

                    <div className="bioThree">
                        <h2>
                            Elijah Elliott
                        </h2>
                        <p>
                            Frontend Developer
                        </p>
                    </div>

                    <div className="bioFour">
                        <h2>
                            Bria Barry
                        </h2>
                        <p>
                            Frontend Developer
                        </p>
                    </div>

                    <div className="bioFive">
                        <h2>
                            Maksim Raymond
                        </h2>
                        <p>
                            Frontend Developer
                        </p>
                    </div>

                    <div className="bioSix">
                        <h2>
                            William Dye
                        </h2>
                        <p>
                            Marketing Team
                        </p>
                    </div>

                    <div className="bioSeven">
                        <h2>
                            Nate Davis
                        </h2>
                        <p>
                            Marketing Team
                        </p>
                    </div>
                    
                </section>
            </body>
        </>
    )
}