import React, { Component } from 'react'
import Footer from './components/Footer'
import ImageSlider from './components/ImageSlider'
// import Navigation from './components/Navigation'
import SampleProducts from './components/SampleProducts'

export default class Home extends Component {
    render() {
        return (
            <div>
                {/* <Navigation /> */}
                <ImageSlider />
                <SampleProducts />
                <Footer />
            </div>
        )
    }
}
