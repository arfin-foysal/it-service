import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container">
    <NavLink className="navbar-brand" to="/">ARFIN IT</NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink className="nav-link active" aria-current="page" activeStyle={{
    fontWeight: "bold",
    color: "red"
  }} to="/home">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link active" aria-current="page"activeStyle={{
    fontWeight: "bold",
    color: "red"
  }}  to="/service">Service</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link active" aria-current="page"activeStyle={{
    fontWeight: "bold",
    color: "red"
  }} to="/about">About</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link active" activeStyle={{
    fontWeight: "bold",
    color: "red"
  }}aria-current="page" to="/contact">Contacts</NavLink>
        </li>
       
      
      </ul>
     
    </div>
  </div>
</nav>
        </div>
    )
}

export default Navbar
