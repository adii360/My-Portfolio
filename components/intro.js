import React from 'react'
import './intro.css'
import {Link} from 'react-scroll'
import btnImg from '../Assets/hireme.png'
import reactLogo from '../Assets/react.svg'
function intro() {
  return (
    <>
     <section id='intro'>
        <div className='introContent'>
        <span className='Hello'>Hello</span>
        <span className='introText'>
        I'm <span className='introName'> Aditya</span>
        <br/>
        Web Developer</span>
        <p classname='introPara'>
        
         </p>
         <Link>
         <button className='btn2'>
            <img src={btnImg} alt='Img' className='btnImg2'/>
            Hire me
            </button>
         </Link>

        </div>
        <img src= {reactLogo} className="logo2" alt='React Logo'/>               
        </section> 
    </>
  )
}

export default intro
