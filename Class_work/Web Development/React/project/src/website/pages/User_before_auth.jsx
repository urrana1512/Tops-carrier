import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';

function User_before_auth() {
    
    const user_auth=localStorage.getItem('u_id');

    return (
       user_auth ? <Navigate to='/' />  : <Outlet/>    
    )
}

export default User_before_auth