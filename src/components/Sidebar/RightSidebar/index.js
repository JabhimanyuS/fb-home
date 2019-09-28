import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import PropTypes from 'prop-types';

import './index.scss'

function RightSidebar(props) {
    return (
        <Container className="freind-requests">
            <span className="heading">Friend Requests</span>
            {props.requests.map((request, index) => {
                return (
                    <Row className="request-item" key={request.id}>
                        <Col md={2}>
                            <img src={request.image} alt="walter" />
                        </Col>
                        <Col>
                            <div className="name">{request.name}</div>
                            <div className="mutual-count">{request.mutual}</div>
                            <div>
                                <button>Confirm</button>
                                <button>Delete</button>
                            </div>
                        </Col>
                    </Row>
                )
            })}
        </Container>
    )
}

RightSidebar.propTypes = {
    requests: PropTypes.array
}

export default RightSidebar
