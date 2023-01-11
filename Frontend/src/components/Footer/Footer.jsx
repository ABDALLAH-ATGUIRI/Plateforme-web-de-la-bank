import { Typography } from "@mui/material"
import Logo from "../../assets/logo/logo_white.svg"
import React from 'react'
import './Footer.css'
function Footer() {
    return (
        <div className='footer'>
            <div className="footer_left">
                <Typography className="footer_copyright"><img src={Logo} alt="logo" className="footer-logo" /></Typography>
            </div>
            <div className="footer_right">
                <Typography className="footer_copyright">Designed and Devloped by <a href='/'>Abdallah ATGUIRI</a></Typography>
            </div>

        </div>
    )
}

export default Footer