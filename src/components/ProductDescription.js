import React, { Component } from 'react'
import { Col, Container, Row, Carousel, CarouselItem, Button, Image } from 'react-bootstrap'
import '../App.css'

export default class ProductDescription extends Component {
    render() {
        return (
            <div>
                <Container className="mt-5 mb-5">
                <Row>
                    <Col>
                        <Container>
                            <Carousel>
                                <CarouselItem interval={1000}>
                                    {/* process.enc.PUBLIC_URL is used to directly get path from the public folder and get images for the slider */}
                                    <img src={process.env.PUBLIC_URL + '/images/spacejoy-KSfe2Z4REEM-unsplash.jpg'} alt="img-1" className="d-block w-100" />
                                </CarouselItem>
                                <CarouselItem interval={1000}>
                                    <img src={process.env.PUBLIC_URL + '/images/spacejoy-ook8KEPiB6A-unsplash.jpg'} alt="img-2" className="d-block w-100" />
                                </CarouselItem>
                                <CarouselItem interval={1000}>
                                    <img src={process.env.PUBLIC_URL + '/images/spacejoy-trG8989WjFA-unsplash.jpg'} alt="img-3" className="d-block w-100" />
                                </CarouselItem>
                            </Carousel>
                        </Container>

                    </Col>

                    <Col>
                        <Container className="prod-desc mt-4">
                            <h5 style={{borderBottom: "1px solid black"}}>Product Name</h5>
                            <br/>

                            <p>Product Details</p>
                            <br/>

                            <Image src={process.env.PUBLIC_URL + '/images/spacejoy-trG8989WjFA-unsplash.jpg'} style={{border: "3px solid black"}} height="50px" width="50px" alt="prod-img" roundedCircle />
                            &nbsp;&nbsp;
                            <Image src={process.env.PUBLIC_URL + '/images/spacejoy-trG8989WjFA-unsplash.jpg'} height="50px" width="50px" alt="prod-img" roundedCircle />
                            <br/><br/>
                            <p>More info about the product</p>

                            <Button className="primary">Buy Now</Button>
                        </Container>
                    </Col>
                </Row>
            </Container>
            </div>
        )
    }
}
