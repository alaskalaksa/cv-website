import React from 'react'

const TechUsed = () => {
  return (    
    <>
       <div className="content paper">
        <br/>
        <h3>Tech Used in this Website</h3>
        <br/>
        <span>APIs</span><br/>
        <p style={{padding:'2%'}}>
          <a href="https://catfact.ninja/fact">Random Cat Facts</a><br/>
          <a href="https://api.open-meteo.com/v1/forecast?latitude=53.3498&longitude=-6.2603&current_weather=true&hourly=temperature_2m,relativehumidity_2m,windspeed_10m">Open Meteo - Live Dublin weather report</a>
        </p>

        <span>Backend</span>
        <p style={{padding:'2%'}}>
          'axios' package for API calls<br/>
          Node.js (npm)<br/>
          Git<br/>
          Heroku for app deployment and hosting
        </p>

        <span>Front end</span>
        <p style={{padding:'2%'}}>
          React<br/>
          <a href='https://reactrouter.com/en/main'>'react-router-dom' package for routing/navigation</a><br/>
          <a href='https://negomi.github.io/react-burger-menu/'>'react-burger-menu' package for UI navigation</a><br/>
        </p>

        <span>Etc.</span>
        <p style={{padding:'2%'}}>
          <a href='https://fontawesome.com/v5/search'>FontAwesome v5</a><br/>
          <a href='https://icons8.com'>Animated weather icons</a><br/>
          <a href='https://www.pexels.com/photo/red-hot-air-balloon-on-sky-325812/'>Background image by Dom Gould</a>
        </p>

       </div>
    </>
    );
};

export default TechUsed;
