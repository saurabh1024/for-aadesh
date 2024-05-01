import React from 'react'
import Header from '../header/header'
import Footer from '../footer/footer'
import FixedMenu from '../header/FixedMenu'
import Purchase from './Purchase'

const Index = () => {
    return (
        <div>
            <Header head="headModal"  cart="cartModal"/>
            <FixedMenu />
            <Purchase />
            <Footer />
        </div>
    )
}

export default Index