import React from 'react';
import { Link, useHistory } from 'react-router-dom';

const Navbar = () => {
    const username = localStorage.getItem('username')
    const { push } = useHistory();
    return (
        <nav>
            <Link to='/dashboard'> Home </Link>
            <Link to='/profile'> {username} </Link>
            <Link to='/createpost'> Create a Post </Link>
            <Link to="/logout" onClick={() => push("/logout")}> Log Out </Link>
        </nav>
    )
}
export default Navbar;