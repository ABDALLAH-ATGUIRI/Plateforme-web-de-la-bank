import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
// import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Logo from "../../assets/logo/logo_cdm.svg"
import "./Header.css"
function Header(props) {
  const pathName = props?.location?.pathname
  return (
    <>
        <Navbar expand="lg" sticky="top" className='header'>
          <Nav  to="/" className='header_navLink'>
            <Navbar.Brand className="header_home">
                <img src={Logo} alt="Logo" />
            </Navbar.Brand>
          </Nav>

        </Navbar>

    </>
  )
}

export default Header