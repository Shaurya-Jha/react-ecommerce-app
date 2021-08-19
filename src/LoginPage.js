import React from 'react'
import { Button, Container, FloatingLabel, Form, Row, Col, Image } from 'react-bootstrap'
import { Route, BrowserRouter as Router, Switch, Link } from 'react-router-dom'
import Footer from './components/Footer'
import SignupPage from './SignUpPage'

const LoginPage = () => {
    return (
        <div>
            <Container className="mt-5">
                <Form>
                    <Row>
                        <Form.Group as={Col} sm={12} md={6} lg={6} style={{backgroundColor:"#e5e4e2", textAlign:"center"}}>
                            <Container>
                                <Image src={process.env.PUBLIC_URL + '/images/login.svg'} alt="img-1" height="400px" width="80%"></Image>
                                </Container>
                        </Form.Group>

                        <Form.Group as={Col} sm={12} md={6} lg={6} style={{backgroundColor:"whitesmoke"}}>
                            <Container className="mt-5" style={{width: "80%"}}>
                                <FloatingLabel controlId="floatingInput" label="Username" className="mb-3">
                                    <Form.Control type="text" placeholder="Enter username"></Form.Control>
                                </FloatingLabel>

                                <FloatingLabel controlId="floatingInput" label="Password" className="mb-3">
                                    <Form.Control type="password" placeholder="Enter password"></Form.Control>
                                </FloatingLabel>
                                <div style={{ textAlign: "center" }}>
                                    <Button variant="primary">Log-In</Button>
                                    <br /><br />
                                    <h6>Not Registered?</h6>
                                    <Link to="/signup"><Button variant="outline-primary">Sign Up</Button></Link>

                                    <Router>
                                        <Switch>
                                            <Route path="/signup" component={<SignupPage />} />
                                        </Switch>
                                    </Router>
                                </div>
                            </Container>
                        </Form.Group>
                    </Row>

                </Form>
            </Container>
            <br/>
            <Footer />

        </div>
    )
}

export default LoginPage

