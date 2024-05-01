import React from 'react'
import Header from '../header/header'
import Footer from '../footer/footer'
import FixedMenu from '../header/FixedMenu'
import FloyxNftItem from './FloyxNftItem'

const Index = () => {
    return (
        <div>
            <Header head="headModal"  cart="cartModal"/>
            <FixedMenu />
            <FloyxNftItem />
            <Footer />
        </div>
    )
}

export default Index