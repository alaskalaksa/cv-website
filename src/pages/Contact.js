import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro'
import { faLinkedin, faWhatsapp } from '@fortawesome/free-brands-svg-icons'

const Contact = () => {
  return (    
    <>
       <div className="content paper">
        <br/>
        <h3>Contact Me</h3>
        <br/>
        <p>
            <a href='www.linkedin.com/in/aalasa-fidler'><FontAwesomeIcon icon={faLinkedin} /> www.linkedin.com/in/aalasa-fidler</a><br/>
            <a href = 'mailto: fidlera@tcd.ie'><FontAwesomeIcon icon={solid('envelope')} /> fidlera@tcd.ie</a><br/>
            <FontAwesomeIcon icon={faWhatsapp} /> +353862112976<br/>
            <a href = '/'><FontAwesomeIcon icon={solid('globe')} /> Aalasa Fidler | Dublin-based Software Developer and Cronut Enthusiast</a><br/>
        </p>
        <div className='announcement'>
            Fancy contact form under development
        </div>
    
       </div>
    </>
    );
};

export default Contact;
