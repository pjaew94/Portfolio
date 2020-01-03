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
    <div class={hamburgerStatus ? 'col turnOn' : 'col'} 
    onClick={toggleHamburgerClass}>
      <div class="con">
        <div class="bar arrow-top-r"></div>
        <div class="bar arrow-middle-r"></div>
        <div class="bar arrow-bottom-r"></div>
      </div>
    </div>
  )
}

export default Hamburger

