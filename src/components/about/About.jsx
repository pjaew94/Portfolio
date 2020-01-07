import React from 'react'
import './About.scss'
import {WorksRightEffect, WorksLeftEffect} from '../Fade/Fade'


function About (props){
 
 return (
  <div name='About' class='aboutContainer'>
    <WorksRightEffect>
      <div class='aboutLeftContainer'>
      <div class='aboutRectangle'>
        </div>
        <div class='aboutText'>
          <h2>ABOUT</h2>
          <h2>ME</h2>
        </div>
      </div>
    </WorksRightEffect>
    <WorksLeftEffect>
      <div class='aboutRightContainer'>
        <div class='rightContainer' >

        </div>
      </div>
    </WorksLeftEffect>
  </div>
 )
}

export default About