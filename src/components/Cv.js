import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'


const Cv = () => {
  return (
    
    <div className="content paper">
      <br/>
      <h3>Aalasa Fidler</h3>
      <p>
        <a href='www.linkedin.com/in/aalasa-fidler'><FontAwesomeIcon icon={faLinkedin} /> www.linkedin.com/in/aalasa-fidler</a><br/>
        <FontAwesomeIcon icon={solid('briefcase')} /> EU/Swedish national<br/>
        <a href = 'mailto: fidlera@tcd.ie'><FontAwesomeIcon icon={solid('envelope')} /> fidlera@tcd.ie</a><br/>
        <a href = 'tel: 353862112976'><FontAwesomeIcon icon={solid('phone')} />+353862112976</a>
      </p>
      <br/>
      <h3>Personal Profile</h3>
      <p>
        - Software Engineer based in Ireland with 3 years experience, seeking permanent hybrid working opportunities.<br/>
        - 3 years experience at IBM on a SRE data science team.<br/>
        - Experience with remote/hybrid working and AGILE methodology.<br/>
        - Strong foundation in software engineering principles and design patterns with an MSc in Computer Science (UCD).<br/>
        - Robust mix of technical knowledge and soft-skills needed to succeed as part of an Engineering team.<br/>
      </p>
      <br/>
      <h3>Technical Skills</h3>
      <p>
        Languages: Python, JavaScript<br/>
        Frameworks: Django, Flask, <b>React</b><br/>
        Data Analysis and ETL: Pandas, NumPy, SciPy, Scikit<br/>
        Containerization + orchestration: Docker, kubernetes<br/>
        E2E and unit testing: pytest, jest<br/>
        Data visualization/dashboarding: Bokeh, D3, matplotlib, plotly<br/>
        Data formats: CSV, JSON, XML<br/>
        <b>CSS preprocessing: SASS, LESS</b><br/>
        Other: Git (GitHub), JSON, ZenHub, Trello, mural<br/>
      </p>
      <br/>
      <h3>Professional Experience</h3>
      <span>Software Developer at IBM May 2019 - March 2022</span>
      <p>
        Developed and maintained dashboards using Flask (Python) and React (JS framework).<br/>
        Visualized the insights of a small team of data scientists.<br/>
        Dashboards were containerized and deployed automatically to the IBM Cloud instance.<br/>
        Liaised with stakeholders through project duration and presented these dashboards to the wider
        business unit after each iteration (sometimes up to 200 people).<br/>
        Developed bespoke data viz classes in Python for use throughout the org using Python, applied data
        viz best practices to all visualizations.<br/>
        Cleaned, wrangled, processed large sets of data under ETL (specifically Extract Load Transform) to
        “Storytell with Data”.<br/>
      </p>
      <br/>
      <span>Freelance Web Developer/Designer 2015 - current</span>
      <p>
        <FontAwesomeIcon icon={solid('circle-check')} /> <a href='https://www.yourinnerhealing.com/home'>Your Inner Healing</a> - Active<br/>
        <a href='http://djenda.herokuapp.com/'>DJ Enda</a> - No longer active<br/>
        <a href='http://www.fortfarmhouse.com/'>Fort Farmhouse</a> - No longer active
      </p>
      <br/>
      <h3>Education</h3>
      <span>University College Dublin — MSc. Computer Science (Conversion)</span>
      <p>
        SEP 2017 - DEC 2018 2.1 Honours Degree / 3.33 GPA<br/>
        Notable modules: Software Engineering, Data Structures & Algorithms, Python, Web Development<br/>
      </p>
      <span>Trinity College Dublin — BA English Studies</span>
      <p>
        SEP 2012 - MAY 2016 2.1 Honours Degree<br/>
        Skills: Literary analysis, critical thinking, independent research, technical writing, time management and organization.
      </p>
      <br/>
      <h3>References</h3>
      <p>
        Available upon request
      </p>
        
    </div>
  );
};

export default Cv;
