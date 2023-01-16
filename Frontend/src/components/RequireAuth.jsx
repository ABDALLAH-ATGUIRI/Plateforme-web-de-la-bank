import { useLocation, Navigate, Outlet } from "react-router-dom"
import React from 'react'
import useAuth from '../hooks/useAuth'

function RequireAuth() {
    const { auth } = useAuth()
    const location = useLocation()
    console.log(auth)
    return (
        false ? <Outlet /> : <Navigate to="/login" />
    )
}

export default RequireAuth