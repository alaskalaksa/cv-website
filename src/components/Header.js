import React from 'react'
import { Link } from "react-router-dom";
import { slide as Menu } from 'react-burger-menu'

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

export default function Header(props) {

	return (
    <>
      <header className='home-header'>
        <div className="top-bar">
        <Menu width={ 200 }>
          <Link to="/" className='menu-item'>Home</Link>
          <Link to="/tech-used" className='menu-item'>Tech Used</Link>
          <Link to="/contact" className='menu-item'>Contact</Link>
       </Menu>

        Dublin | {props.props && props.props.weatherResponse.current_weather.temperature}°C &nbsp; {<WeatherIcon code={props.props && props.props.weatherResponse.current_weather.weathercode}/>}
        </div>
        <h1>
          Aalasa Fidler
        </h1>
        <h2>Software Developer</h2> 

      </header>
    </>
	);
}
