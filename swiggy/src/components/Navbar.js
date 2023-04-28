import React from 'react'
import { Link } from 'react-router-dom'
import "../App.css";

export default function Navbar() {
  return (
    <div className='NAV'>
         <nav className=" navbar navbar-expand-lg navbar">
         <div className="container-fluid">
        <Link className="navbar-brand" to="/">Swiggy</Link>
          
         <div className="collapse navbar-collapse" id="navbarNav">
         <ul className="navbar-nav ms-auto"> 
        <li className="nav-item">
         <Link className="nav-link active " aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
         <Link className="nav-link active " to="/login">Login</Link>
        </li>
        <li className="nav-item">
         <Link className="nav-link active" to="/signup">SignUp</Link>
        </li>
        
        
      </ul>
      
    </div>
  </div>
</nav>
    </div>
  )
}
