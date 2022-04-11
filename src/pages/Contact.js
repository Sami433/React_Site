import React from 'react';
import Logo from '../components/Logo';
import Navigation from '../components/Navigation';

const Contact = () => {
    return (
        <div>
            <Logo />
            <Navigation/>
        

            <form className="contact-form-container" >
        
        <input type="text"  placeholder="Full Name" name='name' className="contact-input" />
     
        <input type="text"  placeholder="Email" name='name' className="contact-input" />
       
     
         <textarea placeholder="Your Message" name='message'  className="contact-input" />
      
      <button className="button submit-button" value="Submit">Send!</button>
        
    </form>







        </div>
        



        
    );
};

export default Contact;