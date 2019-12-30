import React from 'react'
import Hamburger from './hamburger/Hamburger'
import Sidebar from './sidebar/Sidebar'
import Toolbar from './toolbar/Toolbar'
import './NavBar.css'

function NavBar (props){
  return (
    <div class='fullNavBar'>
        <Hamburger />
        <Toolbar />
    </div>
  )
}

export default NavBar