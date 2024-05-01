import React from 'react'
import Header from '../../header/header'
import FixedMenu from '../../header/FixedMenu'
import Footer from '../../footer/footer'
import StackNftItem from './StackNftItem'

const Index = () => {
    return (
        <div>
            <Header head="headModal"  cart="cartModal"/>
            <FixedMenu />
            <StackNftItem />
            <Footer />
        </div>
    )
}

export default Index