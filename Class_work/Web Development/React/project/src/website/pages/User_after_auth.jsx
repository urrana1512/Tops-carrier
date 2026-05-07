import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';

function User_after_auth() {
    
    const user_auth=localStorage.getItem('u_id');

    return (
       user_auth ? <Outlet/> : <Navigate to='/' />   
    )
}

export default User_after_auth