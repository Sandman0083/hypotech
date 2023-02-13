import React from 'react'
import img1 from '../src/logo1.png'
import {Link} from "react-router-dom";
function Nav2(){
    return(
        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-light bg-white fixed-top">
  <div class="container-fluid">
    <Link className='navbar-brand' to="/"><a class="navbar-brand">
      <img src={img1} alt="" width="30" height="28" class="d-inline-block align-text-top" />SuperHypotech</a></Link>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav ni">
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
      </ul>
          </div>
    </div>
  
</nav>
        </div>
    )
}

export default Nav2
