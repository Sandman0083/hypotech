import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Navbar from "./Navbar"
import { VscDeviceMobile } from "react-icons/vsc";
import { MdComputer } from "react-icons/md";
import { AiOutlineCloud } from "react-icons/ai";
import { AiFillDatabase } from "react-icons/ai";
import { AiOutlineMail } from "react-icons/ai";
import Footer from "./Footer"
import { BsFillTelephoneFill } from "react-icons/bs";
import Nav2 from "./Nav2";
import {Link} from "react-router-dom";

function Body(){
    return(
        <div>
        <Nav2 />
        {/* top image */}
        <div className="mainbody" >
            <h1 className="bt">Transforming how technology works</h1>
            <pre className="ct">
            We create high-tech solutions to solve
             complex business operational challenges.
            </pre>
        </div>
     {/* how we provide path */}

     <div>
     <div className="row">
        <div className="col-lg-6 col-sm-12">
            <img className="fm mr rounded-circle" src="https://media.istockphoto.com/id/985559164/photo/co-working-team-meeting-concept-businessman-using-smart-phone-and-digital-tablet-and-laptop.jpg?b=1&s=170667a&w=0&k=20&c=mSeYIP-hBBRhXY_XCjy07Tcj1zEpegseclzX9nJ-P1s="></img>
        </div>
        <div className="col-lg-6 col-sm-12">
            <div className="mmr">
            <h1 >How we deliver a better path forward</h1>
            </div>
            <div>
                <h6 className="ccr">We understand how intricate the software can be. That's why we create requirement-specific technology, platforms, and tools to make digital processes connected, integrated, and — most importantly — simple and seamless.</h6>
                <h6 className="acr">And we don't stop there. Once our digital solutions are in place, we are there when you need us, answering questions, providing answers, and ensuring your operations run smoothly.</h6>
                <h6 className="acr">In essence, we exist to make your day easier, so you can focus on operations.</h6>
            </div>
            
        </div>
     </div>
     </div>

     {/* services */}
     <div className="bg-light serclass">
         <h1 className="serone">Services provided by us</h1>
         
         <div className="row">
         <div className="col-lg-3 col-md-6 col-sm-6 fc">
                <div className="card" style={{"width" : "16rem", "height": "25rem"}}>
                <MdComputer className="card-img-top ir" />
                           <div className="card-body">
                               <h5 className="card-title ct">Web Applications</h5>
                                    <p className="card-text">Customised Web Applications for personal business with backend app and connected with database.</p>
                          </div>
                
               </div>
            </div>


            <div className="col-lg-3 col-md-6 col-sm-6 sc">
                <div className="card" style={{"width" : "16rem", "height": "25rem"}}>
                <VscDeviceMobile className="card-img-top ir" />
                           <div className="card-body">
                               <h5 className="card-title ct">Mobile Applications</h5>
                                    <p className="card-text">Customised Mobile Applications for personal business connected with database.</p>
                          </div>
               </div>
            </div>
         
         <div className="col-lg-3 col-md-6 col-sm-6 fc">
                <div className="card" style={{"width" : "16rem", "height": "25rem"}}>
                <AiOutlineCloud className="card-img-top ir" />
                           <div className="card-body">
                               <h5 className="card-title ct">Cloud Services</h5>
                                    <p className="card-text">Cloud solutions for hosting web apps, mobile apps, cloud database</p>
                          </div>
               </div>
            </div>


            <div className="col-lg-3 col-md-6 col-sm-6 sc">
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
     {/* About us */}
<div className="bg-light">
    <div>
    <h1 className="serone">Who are we</h1> 
    <h5 className="ccr" >
        We are a team of entrepreneurs coming from a background of computer science and information science background. We focus on using our experties of our education and implementing it in real life business problems by providing IT solutions. We have a core team of young, talented and hardworking minds who are working to figure out problems in the market for low and medium level business and making a bridge between business operation and technology for making the life easier. Using smart phones, computers and internet in a smarter way than now. 
    </h5>
    </div>
</div>
     {/* start growing */}
     <div>
        <div className="bg-white">
      <h1 className="serone">Start growing with us</h1>
      <h4 className='pd'>For pricing details please call or drop an email. We will get back to you soon.</h4>
       <Link to="/contact"> <button type="button" class="btn btn-primary mbt">Contact Us</button></Link>

        </div>
     </div>


          <Footer />  
        </div>
    )
}
export default Body