import React from 'react';
import { Link } from 'react-router-dom';

export default function MeetTheTeam() {

    return(
        <>
            <nav>
                <Link to='/'>Home</Link>
                <Link to='/login'>Log-In</Link>
                <Link to='/about'>About Us</Link>
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
                            Backend Developer. First Kings 3:16.
                        </p>
                    </div>

                    <div className="bioTwo">
                        <h2>
                            Seth Bradshaw
                        </h2>
                        <p>
                            Backend Java developer. Wubba wubba dub dub.

                            https://www.linkedin.com/in/seth-bradshaw-b20b151b5/
                        </p>
                    </div>

                    <div className="bioThree">
                        <h2>
                            Elijah Elliott
                        </h2>
                        <p>
                            React devloper. Tesla to the moon. 🚀🚀🚀
                        </p>
                    </div>

                    <div className="bioFour">
                        <h2>
                            Bria Barry
                        </h2>
                        <p>
                            Aspiring frontend developer. My sigil is your epitaph.
                        </p>
                    </div>

                    <div className="bioFive">
                        <h2>
                            William Dye
                        </h2>
                        <p>
                            UI Developer. Amateur cat dad.
                        </p>
                    </div>

                    <div className="bioSix">
                        <h2>
                            Nate Davis
                        </h2>
                        <p>
                            UI Developer. Not your average green boy.
                        </p>
                    </div>
                    
                </section>
            </body>
        </>
    )
}