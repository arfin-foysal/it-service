import { BrowserRouter as Router, Route } from "react-router-dom";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min'
import About from "./Components/Manu/About";
import Contacts from "./Components/Manu/Contacts";
import Home from "./Components/Manu/Home";
import Navbar from "./Components/Manu/Navbar";
import Service from "./Components/Manu/Service";

function App() {
  return (
    <div >
     <Router>
       <Navbar/>
       <switch>
         <Route path="/contact" exact component={Contacts}/>
         <Route path="/service" exact component={Service}/>
         <Route path="/about" exact component={About}/>
         <Route path="/home" exact component={Home}/>
         <Route path="/" exact component={Home}/>
       </switch>
     </Router>
    </div>
  );
}

export default App;
