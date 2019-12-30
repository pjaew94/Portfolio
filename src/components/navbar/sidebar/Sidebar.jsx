import React from 'react'
import './Sidebar.scss'

function Sidebar(props){
  return(
    <div class='hamburger-menu'>
      <ul>
        <a href='/'><li>My Works</li></a>
        <a href='/'><li>About Me</li></a>
        <a href='/'><li>Contact</li></a>
      </ul>
    </div>
  )
}

export default Sidebar