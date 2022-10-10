import { useEffect, useState } from 'react';
import { BrowserRouter, Link, NavLink, Route, Router, Routes } from 'react-router-dom';
import './App.css';
import About from './Components/About';
import ControlledComponent from './Components/ControlledComponent';
import ForwardRef from './Components/ForwardRef';
import HOC from './Components/HOC';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import PageNotFound from './Components/PageNotFound';
import Uncontrolled from './Components/Uncontrolled';
import User from './Components/User';
import UseRef from './Components/UseRef';
import axios from 'axios';


function App() {
  const [latitude,setLatitude]=useState(null);
  const [longitude,setLongitude]=useState(null);
  const [userAddress,setUserAddress]=useState(null);

  const Api_endpoint=`https://us1.locationiq.com/v1/reverse.php?key=pk.456518217705258731c8c7089e3a45d0&lat=${latitude}&lon=${longitude}&format=json`;

  
  function getCoordinates(position){
    setLatitude(position.coords.latitude);
    setLongitude(position.coords.longitude);
     console.log(`${Api_endpoint}`);
       axios.get(`${Api_endpoint}`)
    .then((response)=>{
      console.log(response.data);
      setUserAddress(response.data.display_name);
    })
  }

  function handleLocationError(error){
    switch(error.code) {
      case error.PERMISSION_DENIED:
        alert("User denied the request for Geolocation.")
        break;
      case error.POSITION_UNAVAILABLE:
        alert("Location information is unavailable.")
        break;
      case error.TIMEOUT:
        alert("The request to get user location timed out.")
        break;
      case error.UNKNOWN_ERROR:
        alert("An unknown error occurred.")
        break;
    }
  }
  useEffect(()=>{
    getLocation();
  },[]);

  const getLocation=()=>{
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(getCoordinates,handleLocationError);
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  }
  
  const users=[
    {id:'1',name:'Suhail',email:'mdsuhail1410@gmail.com'},
    {id:'2',name:'Sahil',email:'sahilkhan232@gmail.com'},
    {id:'3',name:'Jeeshan',email:'jeeshan3232@gmail.com'},
  ]
  return (
    <div>
     {/* <UseRef/>
     <ForwardRef/>
     <ControlledComponent/>
     <Uncontrolled/>
     <HOC/> */}
     {/* <Navbar/> */}
     <h1>Geo Location Example</h1>
     {/* <button onClick={getLocation}>Get coordinates</button> */}
     <h4>Html5 coordinates</h4>
     <p>Latitude:{latitude}</p>
     <p>Longitude:{longitude}</p>
     <h4>Google Maps Reverse Geocoding</h4>
     <p>Address:{userAddress}</p>
     <h1>Dynamic Routing</h1>
     {/* {
        users.map((item,i)=><div key={i}><Link to={'users/'+item.id+'/'+item.name}><h3>{item.name}</h3></Link></div>)
      } */}
    <Routes>
      <Route path='/home' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='*' element={<PageNotFound/>}/>
      <Route path='/users/:id/:name' element={<User/>}/>
    </Routes>
    </div>
  );
}

export default App;
