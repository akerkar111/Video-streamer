import React, { useState, useEffect } from "react";
import "./Navbar.css";
import NetflixLogo from "./Netflix-Logo.wine (1).svg";
// import axios from "axios";
import {MdLocationPin} from "react-icons/md";

const API_endpoint=`https://api.openweathermap.org/data/2.5/weather?`;
const API_key = `d0db77d84ae357751b0819c746fd0042`;

const Navbar = () => {
  const [show, handleShow] = useState(false);

  // states to store user's geolocation data
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude]= useState("");
  const [responseData, setResponseData] = useState("");

  useEffect(()=>{
    //getting users location data
    navigator.geolocation.getCurrentPosition((position)=>{
      console.log(position);
      setLatitude(position.coords.latitude);
      setLongitude(position.coords.longitude);
    })
    

    const fetchGeoData = async() => {
      //callin api
      const response = await fetch(`${API_endpoint}lat=${latitude}&lon=${longitude}&appid=${API_key}`);
      const result = await response.json();
      console.log(result);
      setResponseData(result);
      
      //API call
      // const finalAPIEndPoint = `${API_endpoint}lat=${latitude}&lon=${longitude}&appid=${API_key}`;

      // const request = await axios.get(`${API_endpoint}lat=${latitude}&lon=${longitude}&appid=${API_key}`)
      //   console.log(request.data);
      //   setResponseData(request.data);
      //   return request;
    }
    fetchGeoData();
  }, []);

  return (
    <div className={`nav ${show && "nav_black"}`}>
      <img className="nav_logo" src={NetflixLogo} alt="Netflix logo" />

      <div className="geolocation" style={{display:"flex", flexDirection:"column"}}>
      <MdLocationPin size={30} style={{color: "FF0000"}}/>
      <h5 className="location" style={{color: "#00FF00", marginTop: "3px"}}>
        {responseData.name}
      </h5>
      </div>
    </div>
  );
};

export default Navbar;
