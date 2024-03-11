import React from "react";
import Highlights from "../components/highlights";
import './AboutMe.css';
export default function AboutMe() {


  return (
    <div className="about-me-page">
      <div className="about-me-bg-1"></div>
      <div className="about-me-bg-2"></div>
      <main className='page-container'>
        <section id="about">
          <div id='about-div'>
            <div id='name-div'>
            <img src="./profile_pic.png" alt='rishabh' className="rounded-image"></img>
              <p id='line1'>Hi,</p>
              <p id='my-name'>I'm Rishabh</p>
            </div>
            <div id="highlights-div">
              {/*<p>I'm a budding developer passionate about coding and creating meaningful projects. I have worked as a product manager for last 6 years, and am now venturing into the world of programming. My Bachelors (B.Tech.) and Masters(MBA) degrees are from IIT Kanpur and IIM Ahmedabad respectively.</p>*/}
              <Highlights />
            </div>
          </div>
        </section>
      </main>
      <footer id='about-me-footer'>
        <p>&copy; 2024 Rishabh Goel. All rights reserved. V1.1</p>
      </footer>

    </div >

  )
}
