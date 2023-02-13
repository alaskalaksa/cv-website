import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid, light } from '@fortawesome/fontawesome-svg-core/import.macro'
import { faLinkedin, faDeploydog } from '@fortawesome/free-brands-svg-icons'
import { slide as Menu } from 'react-burger-menu'

import Cv from '../components/Cv';

import '../index.css';

function WeatherIcon(props){
  const sunshine = [0, 1, 2];
  const cloud = [3];
  const thunder = [13, 17, 29];
  const snow = [22, 23, 24, 36, 37, 38, 39];
  const fog = [40, 41, 42, 43, 44, 45, 46, 47, 48, 49];

  if(sunshine.includes(props.code)){
    return (
      <img src={"/weatherIcons/sunny.gif"} alt="Loading clear weather icon..."/>);
    }
  else if(cloud.includes(props.code)){
    return (
      <img src={"/weatherIcons/cloudy.gif"} alt="Loading cloudy weather icon..."/>);
    }
  else if(thunder.includes(props.code)){
    return (
      <img src={"/weatherIcons/stormy.gif"} alt="Loading stormy weather icon..."/>);
    }
  else if(snow.includes(props.code)){
    return (
      <img src={"/weatherIcons/snowy.gif"} alt="Loading snowy weather icon..."/>);
    }
  else if(fog.includes(props.code)){
    return (
      <img src={"/weatherIcons/foggy.gif"} alt="Loading foggy weather icon..."/>);
    }
  else{
    return (
      <img src={"/weatherIcons/rainy.gif"} alt="Loading rainy weather icon..."/>);
    }  
}

export default function Header() {
	const [response, setResponse] = useState(null); // updating a state variable always replaces it instead of merging it.

  const fetchData = async () => {
		try {

			// const catFactResponse = await axios.get(`https://catfact.ninja/fact`);
      // const weatherResponse = await axios.get(`https://api.open-meteo.com/v1/forecast?latitude=53.3498&longitude=-6.2603&current_weather=true&hourly=temperature_2m,relativehumidity_2m,windspeed_10m`);
      const catFactResponse = {data: {fact: 'The first cat show was in 1871 at the Crystal Palace in London.'}};
      const weatherResponse = {data: {current_weather: { temperature: 10, weathercode: 3 }}};
      
      setResponse({
        catFactResponse: catFactResponse.data,
        weatherResponse: weatherResponse.data
      });

      
		} catch (err) {
			console.log(err);
		}
  
	};

	useEffect(() => {
		fetchData(); // Trigger the API calls
	}, []);

	return (
    <>
      <header className='home-header'>
        <div className="top-bar">
        <Menu width={ 200 }>
          <a id="home" className="menu-item" href="/">Home</a>
          <a id="about" className="menu-item" href="/about">Stack Used</a>
          <a id="contact" className="menu-item" href="/contact">Contact</a>
       </Menu>

      Dublin | {response && response.weatherResponse.current_weather.temperature}°C &nbsp; {<WeatherIcon code={response && response.weatherResponse.current_weather.weathercode}/>}
        </div>
        <h1>
          
          Aalasa Fidler
        </h1>
        <h2>Software Developer</h2> 

        <Cv/>

        <div className='psuedo-footer'>
          <p>
          { response && <>Random cat fact: { response.catFactResponse.fact } </> }
          <br/>Copyright <FontAwesomeIcon icon={solid('copyright')} size="2xs" /> 2023 Aalasa Fidler<br/>
          <div className='logoBar'>
            <a href='https://www.linkedin.com/in/aalasa-fidler'><FontAwesomeIcon icon={faLinkedin} /></a>&nbsp;
            <a href='https://www.pawshake.ie/petsitters/knocklyon-county-dublin/friendly-responsible-capable-techie-who-loves-dogs-cdruLxpLELP'><FontAwesomeIcon icon={solid('dog')} /></a>&nbsp;
            <a href=''><FontAwesomeIcon icon={solid('briefcase')} /></a>
             | Built with React <FontAwesomeIcon icon={solid('heart')} size="2xs" beat className="pink" />
          </div>
          </p>
        </div>
        
      </header>
      
    </>


	);
}
