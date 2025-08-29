import React from 'react'
import "./About.css"
import HTML from "../Assets/HTML5_Badge.svg"
import CSS from "../Assets/css-3.svg"
import Js from "../Assets/javascript.svg"

function About() {
  return (
    <>
    <section id="about">
        <span className='aboutTitle'>What I Know</span>
        <span className='aboutDesc'> I am a passionate Web Developer with a strong foundation in front-end technology.
                                     Always eager to learn, create and solve real-world problems through code. </span>
        <div className='aboutBars'>
            <div className='aboutBar'>
                <img src={HTML} alt='HTML' className='aboutBarImg'/>
                <div className='aboutBarText'>
                    <h2>HTML</h2>
                    <p>Hypertext Markup Language</p>
                </div>
                </div>

                <div className='aboutBar'>
                <img src={CSS} alt='CSS' className='aboutBarImg'/>
                <div className='aboutBarText'>
                    <h2>CSS</h2>
                    <p>Cascading Style Sheets</p>
                </div>
                </div>

                <div className='aboutBar'>
                <img src={Js} alt='JS' className='aboutBarImg'/>
                <div className='aboutBarText'>
                    <h2>JS</h2>
                    <p>JavaScript</p>
                </div>
            </div>
        
        </div>
    </section></>

      
    
  )
}

export default About
