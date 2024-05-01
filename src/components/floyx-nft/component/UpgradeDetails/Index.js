import React from 'react'
import Header from '../../../header/header'
import FixedMenu from '../../../header/FixedMenu'
import Footer from '../../../footer/footer'
import UpgradeDetailsItem from './UpgradeDetailsItem'

const Index = () => {
    return (
        <div>
            <Header head="headModal"  cart="cartModal"/>
            <FixedMenu />
            <UpgradeDetailsItem />
            <Footer />
        </div>
    )
}

export default Index