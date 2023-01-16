import React from 'react'
import { Grid, Typography } from '@mui/material'
import CustomButton from '../Button/Button'
import { Link } from 'react-router-dom'
import "./Intro.css"
// import Background from "../../assets/backgroud/slider.jpg"

function Intro() {
    return (
        <>
            <Grid container className='section pb_30 pt_45 container_page'>
                <Grid maxWidth={1 / 2}>
                    <Grid item className='section_title mb_30'>
                        <h2 className='section_title_text'>
                            Devenir client CRÉDIT DU MAROC en toute simplicité.
                        </h2>
                    </Grid>
                    <Grid item xs={12} style={{ display: "flex", gap: "20px" }} >
                        <Link to="login">
                            <CustomButton text={"OUVRIR MON COMPTE"} icon={""} />
                        </Link>
                        <Link to="register">
                            <CustomButton text={"CRÈER MON COMPTE"} icon={""} />
                        </Link>
                    </Grid>
                </Grid>

            </Grid>
        </>
    )
}

export default Intro