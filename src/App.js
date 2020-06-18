import React from 'react';
import {
   Route,
   Switch,
   HashRouter as Router
} from 'react-router-dom'
import './App.css';
import Home from './App/components/Home'
import NavBar from './App/components/NavBar'
import About from './App/pages/About'
import ContactUs from './App/pages/ContactUs'
import Giving from './App/pages/Giving'
import Ministries from './App/pages/Ministries'
import NextStep from './App/pages/NextStep'
import VisionBuilders from './App/pages/VisionBuilders'


function App() {
  return (
  <Router>
    <div className="App">
      <NavBar />
      <div className="routes">
      <Switch>
        <Route path="/" component={Home} exact/>
        <Route path="/about-us" component={About} />
        <Route path="/contact-us" component={ContactUs} />
        <Route path="/giving" component={Giving} />
        <Route path="/ministries" component={Ministries} />
        <Route path="/next-steps" component={NextStep} />
        <Route path="/vision-builders" component={VisionBuilders} />
      </Switch>
      </div>
     
    </div>

  </Router>
    

 
  );
}

export default App;

