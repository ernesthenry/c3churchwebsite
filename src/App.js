import React from 'react';
import './App.css';
import NavBar from './components/NavBar'
import Vision from './components/Vision'
import History from './components/History'
import LeadPastor from './components/LeadPastor'
import LocationPastors from './components/LocationPastors'
import ExecutiveTeam from './components/ExecutiveTeam'
import Testimonials from './components/Testimonials'
import Donate from './components/Donate'


function App() {
  return (
    <div className="App">
      
      <NavBar />
      <Vision />
      <History />
      <LeadPastor />
      <LocationPastors />
      <Donate />
      <ExecutiveTeam />
      <Testimonials />
     
    
    </div>
  );
}

export default App;
