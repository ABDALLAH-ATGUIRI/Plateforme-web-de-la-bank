import { Grid, Container, Paper, TextField, Button, IconButton, InputAdornment } from "@mui/material"
import VisibilityIcon from "@mui/icons-material/Visibility"
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff"
import React, { useState } from 'react'

function Login() {
    const [values, setValues] = useState({
        email: "",
        password: "",
        showPass: false
    })
    const handlePassVisibility = () => {
        setValues({
            ...values,
            showPass: !values.showPass
        })
    }
    return (
        <>
            <Container maxWidth="sm">
                <Grid
                    container
                    spacing={2}
                    direction="column"
                    justifyContent="center"
                    style={{ minHeight: "100vh" }}
                    fontSize="16px"
                >
                    <Paper elevation={2} sx={{ padding: 5 }}>
                        <Grid container direction="column" spacing={2}>
                            <Grid item >
                                <TextField
                                    type="email"
                                    fullWidth label="Enter your email"
                                    placeholder="Email Address"
                                    variant='outlined' />
                            </Grid>
                            <Grid item >
                                <TextField
                                    type={values.showPass ? ("email") : ("password")}
                                    fullWidth
                                    label="Enter your password"
                                    placeholder="Password"
                                    variant='outlined'
                                    InputProps={{
                                        endAdornment: (
                                            <InputAdornment position="end">
                                                <IconButton onClick={handlePassVisibility} aria-label="toggle password" edge="end">
                                                    {
                                                        values.showPass ? (<VisibilityOffIcon />) : (<VisibilityIcon />)
                                                    }
                                                </IconButton>
                                            </InputAdornment>)
                                    }} />
                            </Grid>
                            <Grid item >
                                <Button fullWidth variant="contained">Sign In</Button>
                            </Grid>
                        </Grid>
                    </Paper>
                </Grid>
            </Container>
        </>
    )
}

export default Login