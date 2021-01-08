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
                        <div>
                            <img src="https://ca.slack-edge.com/ESZCHB482-W01A9UMLXK2-f258d9857d8c-512"></img>
                        </div>
                        <h2>
                            David Chang
                        </h2>
                        <p>
                            Backend Developer. First Kings 3:16.
                        </p>
                    </div>

                    <div className="bioTwo">
                        <div>
                            <img src="https://lambda-students.slack.com/team/W019LUN3J01"></img>
                        </div>
                        <h2>
                            Seth Bradshaw
                        </h2>
                        <p>
                            Backend Java developer. Wubba wubba dub dub.

                            https://www.linkedin.com/in/seth-bradshaw-b20b151b5/
                        </p>
                    </div>

                    <div className="bioThree">
                        <div>
                            <img src="https://ca.slack-edge.com/ESZCHB482-W019LUL6MDX-410baa369736-512"></img>
                        </div>
                        <h2>
                            Elijah Elliott
                        </h2>
                        <p>
                            React devloper. Tesla to the moon. 🚀🚀🚀
                        </p>
                    </div>

                    <div className="bioFour">
                        <div>
                            <img src="https://ca.slack-edge.com/ESZCHB482-W0123RM84A3-b19f6b8d7ef1-512"></img>
                        </div>
                        <h2>
                            Bria Barry
                        </h2>
                        <p>
                            Aspiring frontend developer. My sigil is your epitaph.
                        </p>
                    </div>

                    <div className="bioFive">
                        <img src="https://ca.slack-edge.com/ESZCHB482-U01DG887ESC-cc9c0ff92c6f-512"></img>
                        <h2>
                            William Dye
                        </h2>
                        <p>
                            UI Developer. Amateur cat dad.
                        </p>
                    </div>

                    <div className="bioSix">
                        <div>
                            <img src="https://ca.slack-edge.com/ESZCHB482-U01CSK3FEE7-df93ec301eae-512"></img>
                        </div>
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