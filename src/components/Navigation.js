import React, { Component } from 'react'
import { Container, Nav, Navbar, NavbarBrand, NavLink } from 'react-bootstrap'
import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse'
import NavbarToggle from 'react-bootstrap/esm/NavbarToggle'
import { Link } from 'react-router-dom'

export default class Navigation extends Component {
    render() {
        return (
            <div>
                <Navbar collapseOnSelect expand="sm" bg="light" variant="light">
                    <Container>
                        <NavbarBrand>E-Commerce App</NavbarBrand>
                        <NavbarToggle aria-controls="responsive-navbar-nav"></NavbarToggle>
                        <NavbarCollapse id="responsive-navbar-nav" className="justify-content-end">
                            <Nav>
                                <NavLink><Link to='/' style={{ textDecoration: "none", color: "black", fontWeight: "3400" }}>Home</Link></NavLink>
                                <NavLink><Link style={{ textDecoration: "none", color: "black", fontWeight: "3400" }} to='/products'>Products</Link></NavLink>
                                <NavLink><Link style={{ textDecoration: "none", color: "black", fontWeight: "3400" }} to='/login'>Log-In</Link></NavLink>
                            </Nav>
                        </NavbarCollapse>
                    </Container>
                </Navbar>
            </div>
        )
    }
}

