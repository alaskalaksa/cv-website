import axios from 'axios'
import {React, useState, useEffect } from "react";
import Header from './components/Header';
import Footer from './components/Footer';
import { Route, Routes } from 'react-router-dom';
import Home from "./pages/Home";
import TechUsed from "./pages/TechUsed";
import Contact from "./pages/Contact";
import './index.css';

function App() {

  const [response, setResponse] = useState(null); // updating a state variable always replaces it instead of merging it.

  useEffect(() => {
		fetchData(); // Trigger the API calls
	}, []);

  const fetchData = async () => {
		try {

			const catFactResponse = await axios.get(`https://catfact.ninja/fact`);
      const weatherResponse = await axios.get(`https://api.open-meteo.com/v1/forecast?latitude=53.3498&longitude=-6.2603&current_weather=true&hourly=temperature_2m,relativehumidity_2m,windspeed_10m`);
      // const catFactResponse = {data: {fact: 'The first cat show was in 1871 at the Crystal Palace in London.'}};
      // const weatherResponse = {data: {current_weather: { temperature: 10, weathercode: 3 }}};
      
      setResponse({
        catFactResponse: catFactResponse.data,
        weatherResponse: weatherResponse.data
      });
      
		} catch (err) {
			console.log(err);
		}
  
	};

  return (
    <div style={{ backgroundImage: "url(/orange3.png)", backgroundSize: 'cover' }}>
      <Header props={response}/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tech-used" element={<TechUsed />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer props={response}/>
    </div>
  );
}

export default App;
