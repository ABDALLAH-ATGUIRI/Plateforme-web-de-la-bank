import React from 'react'
import { Grid, Container, Button } from '@mui/material'
import SuperButton from '../../components/SuperButton/SuperButton'
import "./Client"
function Client() {
    const steps = ['SOLDE ', 'RETRAIT', 'RELEVÈ', "AUTRES SERVICES", "PAYEZ VOTRE VIGNETTE"];

    return (

        <div maxWidth="xl" className="container_login">
            <Grid className="container_login_right container_serves" style={{ display: "flex", flexDirection: "column" , padding: "4%"}} >
                <Grid
                    container
                    spacing={2}
                    style={{ minHeight: "70vh", display: "flex", justifyContent: "space-between" , alignItems: "center"}}
                    fontSize="16px"
                >
                    {steps.map((step) => <SuperButton title={step} />)}
                </Grid>
                <Grid
                    container
                    spacing={2}
                    style={{ display: "flex", justifyContent: "flex-end", alignItems: "center" }}
                >
                    <SuperButton title="ANNULER" />
                </Grid>
            </Grid>

        </div>
    )
}

export default Client