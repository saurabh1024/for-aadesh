import React from 'react'
import Header from '../../header/header'
import FixedMenu from '../../header/FixedMenu'
import Footer from '../../footer/footer'
import ExploreItem from './ExploreItem'

const Index = () => {
    return (
        <div>
            <Header  head="headModal" cart="cartModal"/>
            <FixedMenu />
            <ExploreItem />
            <Footer />
        </div>
    )
}

export default Index