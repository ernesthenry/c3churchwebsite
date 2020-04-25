import React from 'react';
import {
   Route,
   Switch,
   HashRouter as Router
} from 'react-router-dom'
import './App.css';
import Home from './components/Home'
import NavBar from './components/NavBar'
import About from './pages/About'
import ContactUs from './pages/ContactUs'
import Giving from './pages/Giving'
import Ministries from './pages/Ministries'
import NextStep from './pages/NextStep'
import VisionBuilders from './pages/VisionBuilders'


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

