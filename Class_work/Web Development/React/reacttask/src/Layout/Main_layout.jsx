import React from 'react'
import Header from './Header'
import Navbar from './Navbar'
import Home from './Home'
import Footer from './Footer'

function Main_layout() {
  return (
    <div>
        <Header/>
        <Navbar/>
        <Home/>
        <Footer/>
    </div>
  )
}

export default Main_layout