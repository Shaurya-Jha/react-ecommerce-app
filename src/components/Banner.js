import React, { Component } from 'react'
import { Container, Image } from 'react-bootstrap'

export default class Banner extends Component {
    render() {
        return (
            <div>
                <Container fluid className="banner">
                    <Image src={process.env.PUBLIC_URL + '/images/banner.jpg'} alt="img-1" height="100%" width="100%"></Image>
                </Container>
            </div>
        )
    }
}
