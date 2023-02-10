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
        <nav className="navbar bg-warning  navbar-expand-lg fixed-top" data-bs-theme="light">
  <div class="container-fluid">
  {/* <a class="navbar-brand nb" href="#"></a> */}
  <Link className='navbar-brand nb' aria-current="page" to="/">SuperHypoTech Solutions</Link>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0 nitem">
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
        {/* <li className="nav-item noitem">
        <button type="button" class="btn btn-success noitem">Booking</button>
        </li> */}
      </ul>
    </div>
  </div>
</nav>
</div>
    )
}

export default Navbar