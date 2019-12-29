import React, {useState} from 'react'
import './Toolbar.scss'

function Toolbar (props){
  return (
    <div class='compressedToolBar'>
          <ul class='nav-links '>
            <li class='nav-hover'><a href='/'>Hello!</a></li>
            <li class='nav-hover'><a href='/'>My Works</a></li>
            <li class='nav-hover'><a href='/'>About Me</a></li>
            <li class='nav-hover'><a href='/'>Contact</a></li>
          </ul>
          </div>
  )
}

export default Toolbar