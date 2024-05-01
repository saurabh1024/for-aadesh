import React from 'react'
import Header from '../../header/header'
import FixedMenu from '../../header/FixedMenu'
import Footer from '../../footer/footer'
import UpgradeNftItem from './UpgradeNftItem'

const Index = () => {
    return (
        <div>
            <Header head="headModal"  cart="cartModal"/>
            <FixedMenu />
            <UpgradeNftItem />
            <Footer />
        </div>
    )
}

export default Index