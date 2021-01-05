import React from 'react';
import { Route } from 'react-router-dom';
import Home from './Home/home';
import Signup from './Registration/signup';
import Login from './Registration/login';
import About from './Home/about-us';
import MeetTheTeam from './Home/meet-the-team';

// Will be rendering the home page here as the default but am setting up the company logo as the header so that it is set on all lower level pages.

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img 
          src=''
          alt='Co-Make Logo'
        />
      </header>
      <Route path='/signup' component={Signup} />
      <Route path='/login' component={Login} />
      <Route exact path='/' component={Home} />
      <Route path='/about' component={About} />
      <Route path='/team' component={MeetTheTeam} />

    </div>
  );
}

export default App;
