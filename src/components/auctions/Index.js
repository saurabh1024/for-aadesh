import React from 'react'
import Header from '../header/header'
import FixedMenu from '../header/FixedMenu'
import Footer from '../footer/footer'
import Auctions from './Auctions'

const Index = () => {
  return (
    <div>
      <Header head="headModal"  cart="cartModal"/>
      <FixedMenu />
      <Auctions />
      <Footer />
    </div>
  )
}

export default Index