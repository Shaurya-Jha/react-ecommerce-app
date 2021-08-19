import React, { Component } from 'react'
import Footer from './components/Footer'
// import Navigation from './components/Navigation'
import ProductDescription from './components/ProductDescription'

export default class SingleProduct extends Component {
    render() {
        return (
            <div>
                {/* <Navigation /> */}
                <ProductDescription />
                <Footer />
            </div>
        )
    }
}
