import React from 'react'
import Navbar from "./Navbar"
import Footer from "./Footer"
import { AiOutlineMail } from "react-icons/ai";
import { BsFillTelephoneFill } from "react-icons/bs";
import Nav2 from "./Nav2";

function Contact(){
    return (
        <div>
        <Nav2 />
             <div>
        <div className="bg-white cp ">
        <h1 className="serone">Contact us</h1>
      <h3 className="sertwo" >Contact us </h3>
      {/* <h4 className="ci"><AiOutlineMail /><a href = "mailto:  contact.superhypotechsolution@gmail.com"> contact.superhypotechsolution@gmail.com</a></h4> */}
      {/* <h4 className="ci"><BsFillTelephoneFill /><a href="tel:+917667987818">7667987818</a></h4> */}
      <a href = "mailto:  support@superhypotech.in"><h4 className="ci"><AiOutlineMail /> support@superhypotech.in </h4></a>
      <a href="tel:+917667987818"><h4 className="ci"><BsFillTelephoneFill />7667987818</h4></a>

        </div>
     </div>
     <Footer />
        </div>
    )
}

export default Contact