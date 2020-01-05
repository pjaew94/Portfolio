import React, {useState} from 'react'
import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import './Toolbar.scss'

function Toolbar (props){


  return (

    <div class='compressedToolBar'>
          <ul class='nav-links '>
            <li class='nav-hover'>
              <Link 
                activeClass="active" 
                to="Hello" 
                spy={true} 
                smooth={true} 
                duration={1200} >
                Hello!
              </Link>
            </li>  
            <li class='nav-hover'>
              <Link 
                activeClass="active" 
                to="My Works" 
                spy={true} 
                smooth={true} 
                duration={1200} >
                My Works
              </Link>
            </li>
            <li class='nav-hover'>
              <Link 
                activeClass="active" 
                to="/" 
                spy={true} 
                smooth={true} 
                duration={1200} >
                About
              </Link>
            </li>
            <li class='nav-hover'>
              <Link 
                activeClass="active" 
                to="/" 
                spy={true} 
                smooth={true} 
                duration={1200} >
                Contact Me
              </Link>
            </li>
          </ul>
          </div>
  )
}

export default Toolbar