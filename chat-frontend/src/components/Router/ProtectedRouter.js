import React from 'react'
import { Navigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
function ProtectedRoute({children}) {
    const isLoggedIn = useSelector(state => state.authReducer.isLoggedIn)
    console.log(isLoggedIn);
    return (
        // if user logged in, render the children component, else navigate to login page
        isLoggedIn? children :<Navigate to='/login' replace={true} />
    )
}

export default ProtectedRoute