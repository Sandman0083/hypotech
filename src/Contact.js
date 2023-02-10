import React from 'react'
import Navbar from "./Navbar"
import Footer from "./Footer"
import { AiOutlineMail } from "react-icons/ai";
import { BsFillTelephoneFill } from "react-icons/bs";

function Contact(){
    return (
        <div>
        <Navbar />
             <div>
        <div className="bg-white">
        <h1 className="serone">Contact us</h1>
      <h3 className="sertwo" >Contact us </h3>
      <h4 className="ci"><AiOutlineMail /> contact.superhypotechsolution@gmail.com</h4>
      <h4 className="ci"><BsFillTelephoneFill /> 7667987818</h4>

        </div>
     </div>
     <Footer />
        </div>
    )
}

export default Contact