import React from 'react'
import Header from '../../header/header'
import Footer from '../../footer/footer'
import FixedMenu from '../../header/FixedMenu'
import DropToken from './DropToken'

const Index = () => {
  return (
    <div>
      <Header head="headModal"  cart="cartModal"/>
      <FixedMenu />
      <DropToken />
      <Footer />
    </div>
  )
}

export default Index