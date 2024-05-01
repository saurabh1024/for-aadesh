import React from 'react'
import Header from '../header/header'
import HomeBanner from './HomeBanner'
import TopCollection from './Top Collection'
import Explore from './Explore'
import Footer from '../footer/footer'
import FixedMenu from '../header/FixedMenu'
import MenuBar from '../header/MenuBar'

const Index = () => {
    return (
        <div>
            <Header head="headModal" cart="cartModal"/>
            <MenuBar />
            <FixedMenu />
            <HomeBanner />
            <TopCollection />
            <Explore />
            <Footer />
        </div>
    )
}

export default Index