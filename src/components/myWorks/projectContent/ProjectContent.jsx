import React from 'react'
import './ProjectContent.scss'

function ProjectContent (props){

  return (
    <div class='projectContainer'>
      <div class='projectImage'>
        <a href={props.link}><img src={props.image} alt={props.alt}></img></a>
      </div>
      <div class='projectTech'>

      </div>
    </div>
  )

}


export default ProjectContent 