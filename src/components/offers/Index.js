import React from 'react'
import Header from '../header/header'
import Footer from '../footer/footer'
import FixedMenu from '../header/FixedMenu'
import Offers from './Offers'

const Index = () => {
    return (
        <div>
            <Header head="headModal"  cart="cartModal"/>
            <FixedMenu />
            <Offers />
            <Footer />
        </div>
    )
}

export default Index