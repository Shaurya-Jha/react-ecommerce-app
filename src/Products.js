import React, { Component } from 'react'
// import Navigation from './components/Navigation'
import Banner from './components/Banner'
import SampleProducts from './components/SampleProducts'
import Footer from './components/Footer'

export default class Products extends Component {
    render() {
        return (
            <div>
                {/* <Navigation /> */}
                <Banner />
                <SampleProducts />
                <SampleProducts />
                <SampleProducts />
                <Footer />
            </div>
        )
    }
}
