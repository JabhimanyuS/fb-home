import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import PropTypes from 'prop-types';

import './index.scss'

function Header(props) {
    return (
        <Container fluid="true">
            <Row className="page-header">
                <Col md={7} xs={10}>
                    <img src="../../icons/facebook.svg" alt="logo" />
                    <input className="search-field" placeholder="Search" />
                </Col>
                <Col md={5} xs={8} className="navigation-links">
                    <img className="profile-image" src="../icons/Abhimanyu.jpg"  alt="user" />
                    <a href="#">Abhimanyu</a>
                    <a href="#">Home</a>
                    <a href="#">Create</a>
                </Col>
                <Col xs={2} className="hame-menu-icon">
                    <img onClick={props.activateMenu} src="../icons/menu.svg" alt="menu" />
                </Col>
            </Row>
        </Container>

    )
}

Header.propTypes = {
    activateMenu: PropTypes.func
}

export default Header