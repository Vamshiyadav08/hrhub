import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function PageNotFound() {
    const navigate = useNavigate()
    const handleNavigate=()=>{  
       navigate("/",{replace:true})
    }
  return (
    <div>
        <img  src='https://img1a.flixcart.com/www/linchpin/fk-cp-zion/img/error-500_f9bbb4.png'/>
        <p>Unfortunately the page you are looking for has been moved or deleted</p>
        <button onClick={handleNavigate}>Go to DashBoard</button>
    </div>
  )
}
