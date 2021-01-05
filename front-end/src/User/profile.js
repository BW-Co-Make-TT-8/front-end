// Main home page for user profile, renders the defdult local or state posts, has nav bar that includes a link to post, link to profile settings, and button to switch feed from local to state or vice versa.

import react from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function Profile() {
    const [posts, setPosts] = useState([])
    const [currentPostId, setCurrentPostId] = useState(null)

    useEffect(() => {
        const fetchPosts = () => {
            axios
                .get('/posts')
                .then(res => {
                    setPosts(res.data)
                })
                .catch(err => {
                    debugger
                })
        }
        fetchPosts()
    }, [])

    const openDetails = id => {
        setCurrentFriendId(id)
    }

    const closeDetails = () => {
        setCurrentFriendId
    }

    const Post = props => (
        <div className='post'>
            {props.info.name}
            <button onClick={() => openDetails(props.info.id)}>
                See Details
            </button>
        </div>
    )

    return (
        <div className='container'>
            <h1>Your Local Feed</h1>
            {
                posts.map(pst => {
                    return <Post key={pst.id} info={pst} />
                })
            }
            {
                currentFriendId && <PostDetails postId={currentPostId} close={closeDetails} />
            }
        </div>
    )
}