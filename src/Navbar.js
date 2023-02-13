import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import img1 from '../src/logo1.png'



function Navbar(){
    return(
        <div>
         <nav class="navbar navbar-expand-lg navbar-light bg-light bg-white fixed-top">
  <div class="container-fluid">
  <Link className='navbar-brand' aria-current="page" to="/">
  <a class="navbar-brand  align-middle" href="#">
  <img src={img1} alt="" width="30" height="28" class="d-inline-block align-text-top" />SuperHypoTech</a></Link>
  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto nitem">
        <li className="nav-item noitem">
        <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item noitem">
        <Link className="nav-link active" aria-current="page" to="/services">Services</Link>
        </li>
        <li className="nav-item noitem">
        <Link className="nav-link active" aria-current="page" to="/about">About</Link>
        </li>
        <li className="nav-item noitem">
        <Link className="nav-link active" aria-current="page" to="/contact">Contact</Link>
        </li>
        <li className="nav-item noitem">
        <button type="button" class="btn btn-outline-success me-2">Booking</button>
        </li>
      </ul>
    </div>
  </div>
</nav>
</div>
    )
}

export default Navbar