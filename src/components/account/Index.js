import React from 'react'
import Header from '../header/header'
import FixedMenu from '../header/FixedMenu'
import Footer from '../footer/footer'
import Account from './Account'

const Index = () => {
    return (
        <div>
            <Header  head="headModal" cart="cartModal"/>
            <FixedMenu />
            <Account/>
            <Footer />
        </div>
    )
}

export default Index