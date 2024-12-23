import React from 'react'
import Nav from './components/Nav';
import Footer from './components/Footer';
import { Outlet } from 'react-router-dom';
function Upper() {
  return (
    <div className=''>
        <Nav />
        <Outlet />
        <Footer />
    </div>
  )
}

export default Upper