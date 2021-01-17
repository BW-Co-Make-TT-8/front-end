import React, {useState} from 'react';
import {Route} from 'react-router-dom';
import Home from './Home/Home';
import Signup from './Registration/Signup';
import Login from './Registration/Login';
import About from './Home/AboutUs';
import MeetTheTeam from './Home/MeetTheTeam';
import Dashboard from './User/Dashboard';
import Profile from './User/Profile';
import CreatePost from './User/Posts/CreatePost';
import Logout from './Logout';
import SinglePost from './User/Posts/SinglePost';
import CreateComment from './User/Comments/CreateComment';
import {PostContext} from './contexts/PostContext';
import {UserContext} from './contexts/UserContext';
import {CommentContext} from './contexts/CommentContext';
import {axiosWithAuth} from './Utils/axiosWithAuth';

function App() {
    const [otherUser, setOtherUser] = useState(null);
    const [activeUser, setActiveUser] = useState(null);
    const [currentPost, setCurrentPost] = useState(null);
  	const [localPosts, setLocalPosts] = useState([]);
  	const [comments, setComments] = useState(null);
  	const [singleComment, setSingleComment] = useState(null);

    const getActiveUser = () => {
        axiosWithAuth()
            .get('/userinfo')
            .then(res => {
                setActiveUser(res.data);
            })
            .catch(err => {
                console.log("Error trying to fetch current user in App.js===>", err);
            })
    }

    const getOtherUser = (id) => {
        axiosWithAuth()
            .get(`/users/${id}`)
            .then(res => {
                setOtherUser(res.data);
            })
            .catch(err => {
                console.log("Error trying to fetch current user in App.js===>", err);
            })
    }

    const getSingleOrLocalPosts = (zipcode = null, id = null) => {
        zipcode == null ?
        axiosWithAuth()
            .get(`/posts/${id}`)
            .then(res => {
            setCurrentPost(res.data);
            setComments(res.data.comments);
            })
            .catch(err => {
            console.log("Error tyring to get all posts in App.js===>", err);
            })
        :
        axiosWithAuth()
            .get(`/posts/zipcode/${zipcode}`)
            .then(res => {
            setLocalPosts(res.data);
            })
            .catch(err => {
            console.log("Error tyring to get posts by zipcode in App.js===>", err);
            })
    }

    const saveOrEditPost = (id = null, post) => {
        id == null ?
        axiosWithAuth()
            .post('/posts', post)
            .then(res => {
            console.log("Post request for posts in App.js===>", res);
            })
            .catch(err => {
            console.log("Error trying to post to posts in App.js===>", err);
            })
        :
        axiosWithAuth()
            .put(`/posts/${id}`, post)
            .then(res => {
            console.log("Edit request for posts in App.js===>", res);
            })
            .catch(err => {
            console.log("Error trying to post to posts in App.js===>", err);
            })
    }

    const deletePost = (id) => {
        axiosWithAuth()
            .delete(`/posts/${id}`)
            .then(res => {
                console.log(`Successfully deleted post ${id}===>`, res);
            })
            .catch(err => {
                console.log("Ran into this error while deleting post===>", err);
            })
    }

    const getComment = (id) => {
        axiosWithAuth()
        .get(`/comments/${id}`)
        .then(res => {
            setSingleComment(res.data);
        })
        .catch(err => {
            console.log("Ran into this error while getting single comment===>", err);
        })
    }

    const addOrEditComment = (id = null) => {
        id != null ?
        axiosWithAuth()
            .put(`/comments/${id}`)
            .then(res => {
                console.log("Successfully edited single comment===>", res);
            })
            .catch(err => {
                console.log("Ran into this error while editing single comment in App.js===>", err);
            })  
        :
        axiosWithAuth()
            .post(`/comments/`)
            .then(res => {
                console.log("Successfully added single comment===>", res);
            })
            .catch(err => {
                console.log("Ran into this error while adding single comment in App.js===>", err);
            })
    }

    const deleteComment = (id) => {
        axiosWithAuth()
        .delete(`/comments/${id}`)
        .then(res => {
            console.log("Successfully deleted single comment===>", res);
        })
        .catch(err => {
            console.log("Ran into this error while deleting single comment in App.js===>", err);
        })
    }



    return (
        <div className="App">
        <UserContext.Provider value={activeUser, otherUser, getActiveUser, getOtherUser}>
            <PostContext.Provider value={localPosts, currentPost,  getSingleOrLocalPosts, saveOrEditPost, deletePost}>
            <CommentContext.Provider value={comments, singleComment, getComment, addOrEditComment, deleteComment}>
                <Route path='/signup' component={Signup}/>
                <Route path='/login' component={Login}/>
                <Route path='/logout' component={Logout}/>
                <Route exact path='/' component={Home}/>
                <Route path='/about' component={About}/>
                <Route path='/team' component={MeetTheTeam}/>
                <Route path='/dashboard' component={Dashboard}/>
                <Route path='/createpost' component={CreatePost}/>
                <Route path='/profile' component={Profile}/>
                <Route exact path='/post/:postid' component={SinglePost}/>
                <Route path='/post/:postid/addcomment' component={CreateComment}/>
            </CommentContext.Provider>
            </PostContext.Provider>
        </UserContext.Provider>
        </div>
    );
}

export default App;