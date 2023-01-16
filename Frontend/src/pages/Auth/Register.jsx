import React, { createContext } from 'react'
import { Grid } from '@mui/material'
import "./Auth.css"
import SignIn from '../../components/SignIn/SignIn'
import { Route, Routes } from "react-router";

function Register() {
    return (
        <div maxWidth="xl" className="container_login">
            <Grid
                container
                spacing={2}
                direction="column"
                justifyContent="center"
                style={{ minHeight: "80vh" }}
                fontSize="16px"
                className="container_login_right"
            >
                <SignIn />

            </Grid>
        </div>)
}

export default Register