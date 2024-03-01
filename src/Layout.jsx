import React from 'react'
import Header from './component/Header.jsx'
import Footer from './component/Footer.jsx'
import {Outlet} from 'react-router-dom'
function layout() {
  return (
    <div className='layout'>
      <Header></Header>
      <Outlet></Outlet>
      <Footer></Footer>

    </div>
  )
}

export default layout
