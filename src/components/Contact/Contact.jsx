import React from 'react'
import './Contact.css'
import msg_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import location_icon from '../../assets/location-icon.png'
import white_arrow from '../../assets/white-arrow.png'

const Contact = () => {
    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", "7de4aa24-f38d-4c91-b48b-c2de67ecfa48");
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    };
  return (
    <div className='contact'>
    <div className='contact-co1'>
        <h3>Send us a message <img src={msg_icon} alt=''/></h3>
        <p>
            Feel free to reach me out throught contact form or find our contact information below your feedback question nd suggestions are important to us as we strive to provide exceptional service to our university
            community
        </p>
        <ul>
            <li><img src={mail_icon} alt=''/>  contact@greatStack.dev</li>
            <li><img src={phone_icon} alt=''/>+91 9876543219</li>
            <li><img src={location_icon} alt=''/>77 massachusetts ave, cambridge<br/>MA 02139, united state</li>
        </ul>
    </div>
<div className='contact-co1'>
<form onSubmit={onSubmit}>
 <label>Your Name</label>
      <input 
         type='text'
         name='name'
         placeholder='Enter your name'
         required/>
 <label>Mobile number </label>
      <input 
         type='tel'
         name='phone'
         placeholder='Enter your mobile number'
         required />
 <label>write your messages here</label>
      <textarea
         name='message'
         rows="6"
         placeholder='enter your message'
         required>
      </textarea>
      <button type='submit' className='btn dark-btn'>Submit now<img src={white_arrow} alt=''/></button>

</form>
<span>{result}</span>




</div>


    </div>
    
  )
}

export default Contact