import React from 'react'
import './About.css'
import about_img from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'

const About = ({setPlayState}) => {
  return (
    <div className='about'id='about'>
        <div className='about-left'>
        <img src={about_img} alt='' className='about-img' />
        <img src={play_icon} alt='' className='play-icon' onClick={()=>{setPlayState(true)}} />
        </div>
    <div className='about-right'>
        <h3>ABOUT UNIVERSITY</h3>
        <h2> Nurturing Tomorrow's Leaders Today</h2>
        <p>Embark on a transformative eduction journey with our university's comprehensive
            education program. our cutting-edge curriculum is designed to empower students with
            the knowledge, skills and experiences needed to excel in the dynamic field of education.
        </p>
        <p>
            with a focus on innovation hand- on learning and personalized mentorship our program
            prepare aspiring educators to make a meaningful impact in classrooms school and communities
        </p>
        <p>
            whether you aspire to become a teacher administrator counselor or education leader our diverse range of program
            offers the perfect pathway to achieve your goal and unlock your full potential in shaping the future 
            of education. 
        </p>
    </div>
    </div>

  )
}

export default About