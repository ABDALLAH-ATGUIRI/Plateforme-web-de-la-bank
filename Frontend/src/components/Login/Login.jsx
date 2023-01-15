import { Grid, Container, Paper, TextField, Button, IconButton, InputAdornment, Typography } from "@mui/material"
import VisibilityIcon from "@mui/icons-material/Visibility"
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff"
import React, { useState } from 'react'
import "./Login.css"

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
        <Paper elevation={2} sx={{ padding: 5, position: "absolute", zIndex: 100, width: "50%", height: "400px", marginLeft: "100px", borderRadius: "20px" }} className="card_login">
            <Grid container direction="column" spacing={2}>
                <Typography gutterBottom variant="h5" component="h1" className='title_card_login'>
                    Bienvenue sur <span>MyCDM,</span> </Typography>
                <Typography gutterBottom variant="p" component="p" className='description_card_login'>
                    La banque en ligne par Crédit du Maroc</Typography>
            </Grid>

            <Grid container direction="column" spacing={3}>
                <Grid item >
                    <TextField
                        type="email"
                        fullWidth label="Renseignez votre identifiant"
                        placeholder="Ex. 647 865 045"
                        variant='outlined'
                        required="required" 
                        sx={{border:"4px"}}
                        />

                </Grid>
                <Grid item >
                    <TextField
                        type={values.showPass ? ("text") : ("password")}
                        fullWidth
                        label="Enter your password"
                        placeholder="Password"
                        variant='outlined'
                        required="required"
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


    )
}

export default Login