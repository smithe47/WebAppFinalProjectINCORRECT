import React from 'react';
import {Link, useNavigate} from 'react-router-dom';

export const Logout = () => {

    let navigate = useNavigate();

    function onLogout() {
        Accounts.logout();
        navigate('/');
    }

    return(
        <button onClick={onLogout}>Logout</button>
    )
}