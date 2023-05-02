import React from 'react';
import { Link } from 'react-router-dom';

export default NavBar = () => {
    return (
        <>
        <div>
            <h1 className='siteTitle'>Linked Out</h1>
            <nav>
                <Link to="/App" className='navItem'> Posts </Link> | <Link to='/Signup' className='navItem'> Signup </Link> | <Link to='/Login' className='navItem'> Login </Link>
            </nav>
        </div>
        </>
    )
}