import React from 'react'
import './MyWorks.scss'
import FadeTopBottom, {WorksRightEffect, WorksLeftEffect} from '../Fade/Fade'
import ProjectContent from './projectContent/ProjectContent'
import restaurantImage from './myWorksImages/restaurantImage.jpg'
import greeceImage from './myWorksImages/greeceImage.jpg'
import prettyPic from './myWorksImages/prettyPic.jpg'
import saxPic from './myWorksImages/saxPic.jpg'


function MyWorks (props) {
  return (

    <div name='My Works' class='myWorksContainer'>
    <WorksLeftEffect>
      <div class='worksLeftSide'>
       <div class='leftContainer'>
        <ProjectContent
          image={restaurantImage}
          alt='restaurant'
         />
        <ProjectContent 
          image={greeceImage}
          alt='greece'
        />      
        <ProjectContent 
          image={prettyPic}
          alt='pretty'
        />
        <ProjectContent 
          image={saxPic}
          alt='yes'
        />
       </div>
      </div>
      </WorksLeftEffect>

      <WorksRightEffect>
      <div class='worksRightSide'>
        <div class='worksRectangle'>
        </div>
        <div class='worksText'>
          <h2>MY</h2>
          <h2>WORKS</h2>
        </div>
      </div>
      </WorksRightEffect>
    </div>
  )
}


export default MyWorks