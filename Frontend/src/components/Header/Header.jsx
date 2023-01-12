import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
// import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import "./Header.css"
function Header(props) {
  const pathName = props?.location?.pathname
  return (
    <>
        <Navbar expand="lg" sticky="top" className='header'>
          <Nav  to="/" className='header_navLink'>
            <Navbar.Brand className="header_home">
                <img src="./assets/logo/logo_cdm.svg" alt="Logo" className='nav_logo' />
            </Navbar.Brand>
          </Nav>

        </Navbar>

    </>
  )
}

export default Header