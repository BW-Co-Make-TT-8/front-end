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
        <body>
            <h1>Meet the Team</h1>

            <section className="meetTeamIntro">
                <p>
                    This is where the the corporate jargon-laden introduction will go lol.
                </p>
            </section>

            <section className="teamBioContainer">
                <div className="bioOne">
                    <h2>
                        Team Member 1
                    </h2>
                    <p>
                        This is where a team member's bio will go lol.
                    </p>
                </div>

                <div className="bioTwo">
                    <h2>
                        Team Member 2
                    </h2>
                    <p>
                        This is where a team member's bio will go lol.
                    </p>
                </div>

                <div className="bioThree">
                    <h2>
                        Team Member 3
                    </h2>
                    <p>
                        This is where a team member's bio will go lol.
                    </p>
                </div>

                <div className="bioFour">
                    <h2>
                        Team Member 4
                    </h2>
                    <p>
                        This is where a team member's bio will go lol.
                    </p>
                </div>
                
            </section>
        </body>
      </>
    )
}