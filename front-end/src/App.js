import React from 'react';
import { Route } from 'react-router-dom';
import Home from './Home/Home';
import Signup from './Registration/Signup';
import Login from './Registration/Login';
import About from './Home/AboutUs';
import MeetTheTeam from './Home/MeetTheTeam';
import Dashboard from './User/Dashboard';
import Profile from './User/Profile'
import CreatePost from './User/Posts/CreatePost';
import Logout from './Logout';
import SinglePost from './User/Posts/SinglePost';
import CreateComment from './User/Comments/CreateComment';
import OtherUserProfile from './User/OtherUserProfile';

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
      <Route path='/logout' component={Logout}/>
      <Route exact path='/' component={Home} />
      <Route path='/about' component={About} />
      <Route path='/team' component={MeetTheTeam} />
      <Route path='/dashboard' component={Dashboard} />
      <Route path='/createpost' component={CreatePost} />
      <Route path='/profile' component={Profile} />
      <Route exact path='/post/:postid' component={SinglePost} />
      <Route path='/post/:postid/addcomment' component={CreateComment} />
      <Route path='/users/:userid/' component={OtherUserProfile}/>
    </div>
  );
}

export default App;
