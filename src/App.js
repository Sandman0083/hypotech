import React , {Fragment} from "react"
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Body from './Body';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Services from './Services'
import Contact from "./Contact";
import About from "./About";


function App() {
  return (
    <div className="container-fluid bg-transparent">
     <Router>
<Fragment>

<Routes>

<Route path="/" element={<Body />}>
    
    </Route>

  <Route path="/services" element={<Services />}>
    
  </Route>
<Route path="/contact" element={<Contact />} />
<Route path="/about" element={<About />} />
</Routes>
</Fragment>


</Router>
    </div>
  );
}

export default App;
