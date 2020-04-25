import React from 'react'
import Vision from './Vision'
import History from './History'
import LeadPastor from './LeadPastor'
import LocationPastors from './LocationPastors'
import ExecutiveTeam from './ExecutiveTeam'
import Testimonials from './Testimonials'
import Donate from './Donate'
import Footer from './Footer'

const Home = () => {
    return (
        <div> 
            <Vision />
            <History />
            <LeadPastor />
            <LocationPastors />
            <Donate />
            <ExecutiveTeam />
            <Testimonials />
            <Footer/>
        </div>
    )
}

export  default Home;