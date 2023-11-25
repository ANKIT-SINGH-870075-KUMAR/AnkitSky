import React from 'react';
import Banner from '../Banner/banner';
import "./Home.css";
import Explore from '../Explore/Explore';
import Destination from '../Destination/Destination';
import Student from '../Student/Student';
import Contact from '../Contact/contact';
import Test from '../Testimonials/Test';

function home() {
  return (
    <div>
      <Banner/>
      <Explore/>
      <Destination/>
      <Student/>
      <Contact/>
      <Test/>
    </div>
  )
}

export default home
