import React from 'react'
import { VscDeviceMobile } from "react-icons/vsc";
import { MdComputer } from "react-icons/md";
import { AiOutlineCloud } from "react-icons/ai";
import { AiFillDatabase } from "react-icons/ai";
import Footer from "./Footer"
import Navbar from './Navbar';

function Services(){
    return(
        <div>
        <Navbar />
             <div className="bg-light serclass">
         <h1 className="serone">Services provided by us</h1>
         
         <div className="row">
         <div className="col-lg-3 col-md-6 col-sm-12 fc">
                <div className="card" style={{"width" : "16rem", "height": "25rem"}}>
                <MdComputer className="card-img-top ir" />
                           <div className="card-body">
                               <h5 className="card-title ct">Web Applications</h5>
                                    <p className="card-text">Customised Web Applications for personal business with backend app and connected with database.</p>
                          </div>
                
               </div>
            </div>


            <div className="col-lg-3 col-md-6 col-sm-12 sc">
                <div className="card" style={{"width" : "16rem", "height": "25rem"}}>
                <VscDeviceMobile className="card-img-top ir" />
                           <div className="card-body">
                               <h5 className="card-title ct">Mobile Applications</h5>
                                    <p className="card-text">Customised Mobile Applications for personal business connected with database.</p>
                          </div>
               </div>
            </div>
         
         <div className="col-lg-3 col-md-6 col-sm-12 fc">
                <div className="card" style={{"width" : "16rem", "height": "25rem"}}>
                <AiOutlineCloud className="card-img-top ir" />
                           <div className="card-body">
                               <h5 className="card-title ct">Cloud Services</h5>
                                    <p className="card-text">Cloud solutions for hosting web apps, mobile apps, cloud database</p>
                          </div>
               </div>
            </div>


            <div className="col-lg-3 col-md-6 col-sm-12 sc">
                <div className="card" style={{"width" : "16rem", "height": "25rem"}}>
                <AiFillDatabase className="card-img-top ir" />
                           <div className="card-body">
                               <h5 className="card-title ct">Database</h5>
                                    <p className="card-text">Connected databse operable from user interface for data manupulation</p>
                          </div>
               </div>
            </div>
           
            </div> 
     </div>
     <Footer />
        </div>
    )
}

export default Services