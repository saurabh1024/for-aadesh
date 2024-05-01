import React from 'react'
import Header from '../../header/header'
import FixedMenu from '../../header/FixedMenu'
import Footer from '../../footer/footer'
import CollectionItems from './CollectionItems'

const Index = () => {
    return (
        <div>
            <Header head="headModal"  cart="cartModal"/>
            <FixedMenu />
            <CollectionItems />
            <Footer />
        </div>
    )
}

export default Index