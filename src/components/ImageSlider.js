import React, { Component } from 'react'
import { Carousel, CarouselItem } from 'react-bootstrap'

export default class ImageSlider extends Component {
    render() {
        return (
            <div>
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
            </div>
        )
    }
}
