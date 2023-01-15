import React from 'react'
import Login from '../../components/Login/Login'
import { Grid } from '@mui/material'
import "./Auth.css"
import SignIn from '../../components/SignIn/SignIn'
function Auth() {
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
                {/* <Login /> */}
                <SignIn/>
                {/* <Grid
                    container
                    spacing={1}
                    fontSize="16px"
                    className="container_login_left"
                /> */}
            </Grid>
        </div>)
}

export default Auth