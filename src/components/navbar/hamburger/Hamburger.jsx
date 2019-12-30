import React, {useState} from 'react'
import './Hamburger.scss'

function Hamburger (props){

  const [hamburgerStatus, toggleHamburger] = useState(false)

  function toggleHamburgerClass() {
    toggleHamburger(prev => {
      return !hamburgerStatus
    })
  }

  return (
    <div class={hamburgerStatus ? 'menu-toggle turnOn' : 'menu-toggle'} 
    onClick={toggleHamburgerClass}>
      <div class='hamburger'>
        <span class='line'></span>
        <span class='line'></span>
        <span class='line'></span>
      </div>
      <div class='cross'>
        <span></span>
        <span></span>
      </div>
    </div>
  )
}

export default Hamburger