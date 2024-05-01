import React from 'react'
import Header from '../header/header'
import FixedMenu from '../header/FixedMenu'
import Footer from '../footer/footer'
import MyCollection from './MyCollection'

const Index = () => {
    return (
        <div>
            <Header head="headModal"  cart="cartModal"/>
            <FixedMenu />
            <MyCollection />
            <Footer />
        </div>
    )
}

export default Index