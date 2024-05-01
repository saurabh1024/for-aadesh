import React from 'react'
import Header from '../header/header'
import Footer from '../footer/footer'
import Drops from './Drops'
import FixedMenu from '../header/FixedMenu'

const Index = () => {
  return (
    <div>
      <Header head="headModal"  cart="cartModal"/>
      <FixedMenu />
      <Drops />
      <Footer />
    </div>
  )
}

export default Index