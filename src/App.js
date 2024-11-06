import React, { useState } from 'react'
import Navbar from './components/navbar/Navbar'
import Hero from './components/Hero/Hero'
import Programs from './components/Programs/Programs'
import Title from './components/Title/Title'
import About from './components/About/About'
import Campus from './components/Campus/Campus'
import Testimonials from './components/Testimonials/Testimonials'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import VideoPlayer from './components/Videoplayer/VideoPlayer'
const App =() =>{
  const [playState,setPlayState]=useState(false)
  return (
    <div>
      <Navbar
      />
      
      <Hero/>
      <div className='container'>
        <Title
        subTitle ='Our Program' title ='What We Offer'
        />
      <Programs/></div>
      <About
      setPlayState={setPlayState}
      />
       <Title
       subTitle ='Gallery' title ='Campus Photos'
       />
       <Campus/>
       <Title
       subTitle ='TESTIMONIALS' title ='what studend say'
       />
       <Testimonials/>
       <Title
       subTitle ='Contact Us' title ='Get in Touch'
       />
       <Contact/>
       <Footer/>
       <VideoPlayer
       playState={playState}
       setPlayState={setPlayState}
       />
   </div>
  
    
  )
}

export default App