import React from 'react';
import { Container, Row, Col, Navbar as NavbarMenu } from 'react-bootstrap'
import { useNavigate } from "react-router-dom";

const Navbar = ({ showBack = false }) => {
    const navigate = useNavigate();

    return (
        <NavbarMenu bg="dark" variant="dark">
            <Container className="navbar-block">
                {
                    showBack && (
                        <NavbarMenu.Brand className="navbar-link navbar-back" onClick={() => navigate(-1)}>&lt; Back</NavbarMenu.Brand>
                    )
                }
                <NavbarMenu.Brand className="navbar-link"  onClick={() => navigate('/')}>Home</NavbarMenu.Brand>
            </Container>
        </NavbarMenu>
    );
}

export default Navbar;
