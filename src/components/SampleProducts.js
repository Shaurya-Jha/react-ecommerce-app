import React, { Component } from 'react'
import { Button, Card, CardImg, Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default class SampleProducts extends Component {
    render() {
        return (
            <div>
                <Container fluid className="mt-5 mb-5">
                <Row>
                    <Col className="d-flex justify-content-center">
                        <Card style={{ width: "16rem" }}>
                            <CardImg variant="top" src={process.env.PUBLIC_URL + '/images/banner.jpg'}></CardImg>
                            <Card.Body>
                                <Card.Title>Product Name</Card.Title>
                                <Card.Text>
                                    brief info about product
                                </Card.Text>
                                <Link to="/product"><Button variant="primary">View More</Button></Link>
                            </Card.Body>
                        </Card>
                    </Col>
                    
                    <Col className="d-flex justify-content-center">
                        <Card style={{ width: "16rem" }}>
                            <CardImg variant="top" src={process.env.PUBLIC_URL + '/images/banner.jpg'}></CardImg>
                            <Card.Body>
                                <Card.Title>Product Name</Card.Title>
                                <Card.Text>
                                    brief info about product
                                </Card.Text>
                                <Link to="/product"><Button variant="primary">View More</Button></Link>
                            </Card.Body>
                        </Card>
                    </Col>
                    
                    <Col className="d-flex justify-content-center">
                        <Card style={{ width: "16rem" }}>
                            <CardImg variant="top" src={process.env.PUBLIC_URL + '/images/banner.jpg'}></CardImg>
                            <Card.Body>
                                <Card.Title>Product Name</Card.Title>
                                <Card.Text>
                                    brief info about product
                                </Card.Text>
                                <Link to="/product"><Button variant="primary">View More</Button></Link>
                            </Card.Body>
                        </Card>
                    </Col>
                    
                    <Col className="d-flex justify-content-center">
                        <Card style={{ width: "16rem" }}>
                            <CardImg variant="top" src={process.env.PUBLIC_URL + '/images/banner.jpg'}></CardImg>
                            <Card.Body>
                                <Card.Title>Product Name</Card.Title>
                                <Card.Text>
                                    brief info about product
                                </Card.Text>
                                <Link to="/product"><Button variant="primary">View More</Button></Link>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
            </div>
        )
    }
}
