import React from 'react'
import Header from '../../header/header'
import Footer from '../../footer/footer'
import FixedMenu from '../../header/FixedMenu'
import MintDetail from './MintDetail'

const Index = () => {
    return (
        <div>
            <Header head="headModal"  cart="cartModal"/>
            <FixedMenu />
            <MintDetail />
            <Footer />
        </div>
    )
}

export default Index