import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import Logo from "../../assets/logo/logo_cdm.svg"
import IconButton from '@mui/material/IconButton';



function Header() {


    return (
        <>
            <AppBar position="static" >
                <Container maxWidth="full" sx={{ bgcolor: "", overflow: "hidden", position: "absolute", zIndex: 100, padding: "3%" }}>
                            <img src={Logo} alt="logo" />
                </Container >
            </AppBar >
        </>
    );
}

export default Header;
