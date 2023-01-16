import React from 'react'
import CustomButton from '../Button/Button'
import { Container, Grid, Typography } from "@mui/material"
import { Link } from "react-router-dom";
import "./Confirmation.css"

function Confirmation() {
    return (

        <>
            <Container item >
                <Grid container direction="column" spacing={2}>
                    <Typography gutterBottom variant="h5" component="h2" className='title_confirmation_card' sx={{ fontWeight: "bold" }}>
                        Merci, nous sommes heureux de vous compter parmi nos futurs clients
                    </Typography>
                    <Typography gutterBottom variant="p" component="p" className='description_confirmation_card'>
                        Vous recevrez un email contenant votre numéro de compte
                    </Typography>
                </Grid>
                <Grid direction="column" spacing={2} sx={{ paddingTop: "24px", paddingLeft: 0 }}>
                    <Link to="/"><CustomButton text={"RETOUR À LA PAGE D'ACCEUIL"} icon={""} /></Link>
                </Grid>
            </Container>
        </>
    )
}

export default Confirmation