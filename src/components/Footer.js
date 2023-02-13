import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import React from 'react'

export default function Footer(props) {

  return (
    <div className='psuedo-footer'>

        <span className="pink">Random cat fact: { props.props && props.props.catFactResponse.fact }</span>

        <div className='logoBar'>
        <a href='https://www.linkedin.com/in/aalasa-fidler'><FontAwesomeIcon icon={faLinkedin} /></a>&nbsp;
        <a href='https://www.pawshake.ie/petsitters/knocklyon-county-dublin/friendly-responsible-capable-techie-who-loves-dogs-cdruLxpLELP'><FontAwesomeIcon icon={solid('dog')} /></a>&nbsp;
        <a href='/'><FontAwesomeIcon icon={solid('briefcase')} /></a>
            | Built with React <FontAwesomeIcon icon={solid('heart')} size="2xs" beat className="pink" />
        </div>

        <br/>Copyright <FontAwesomeIcon icon={solid('copyright')} size="2xs" /> 2023 Aalasa Fidler<br/>
</div>
    );
};
