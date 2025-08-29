import React from 'react'
import "./Project.css"
import project from "../Assets/project.jpg"

function Project() {
  return (
    <>
    <section id="project">
        <h2 className='projectTitle'>My Project</h2>
        <span className='projectDesc'>Here are my Projects</span>

        <div className='project-item'>
            <div className='item-details'>
              <p className='P1'>Project-1</p>
              <p className='P2'>Login page</p>
            </div>
            <a href="https://github.com/adii360/Web-development/tree/main/Login%20page">
            <img src={project} alt='Project' className='projectImg'/></a>
        </div>

        <div className='project-item'>
            <div className='item-details'>
              <p className='P1'> Project-2</p>
              <p className='P2'>Speech to text converter</p>
            </div>
            <a href="https://github.com/adii360/Web-development/tree/main/Speech%20to%20text%20converter">
            <img src={project} alt='Project' className='projectImg'/></a>
        </div>

        <div className='project-item'>
            <div className='item-details'>
              <p className='P1'>Project-3</p>
              <p className='P2'></p>
            </div>
            <img src={project} alt='Project' className='projectImg'/>
        </div>

    </section>
      
    </>
  )
}

export default Project
