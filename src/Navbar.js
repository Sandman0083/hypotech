import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";



function Navbar(){
    return(
        <div className='mainNav'>
        <nav className=" bg-light  navbar-expand-lg fixed-top" data-bs-theme="light">
  <div class="container justify-content-center">
  {/* <a class="navbar-brand  align-middle nb" href="#">SuperHypoTech Solutions</a> */}
  <Link className='navbar-brand nib' aria-current="page" to="/">SuperHypoTech Solutions</Link>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
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