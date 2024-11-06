import React from 'react'
import './Footer.css'

const Footer = () => {
    const today =new Date();
  return (
    <div className='footer'>
        <p>Copyright &copy; {today.getFullYear()}</p>
        <ul>
            <li>Terms of services</li>
            <li>Privacy policy</li>
        </ul>
    </div>
  )
}

export default Footer