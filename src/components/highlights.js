import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const array = [(
  <div className='about-me-tiles'>
    <p className='tile-name'>Summary</p>
    <p>I'm a budding developer passionate about coding and creating meaningful projects. I have worked as a product manager for last 6 years, and am now venturing into the world of programming</p>
  </div>
), (
  <div className='about-me-tiles'>
    <p className='tile-name'>Skills</p>
    {/*<img src='./html_css_js.png' alt='skills' className='logo' />*/}
    <ul id='skill-list'>
      <li>HTML | CSS | ReactJS</li>
      <li>JavaScript | Python</li>
      <li>Redux | ExpressJS | Github</li>
    </ul>
  </div>
), (
  <div className='about-me-tiles'>
    <p className='tile-name'>Qualifications</p>
    <ul id='quals'>
      <li>B.Tech. from IIT Kanpur</li>
      <li>Front-end developer certification from CodeAcademy</li>
      <li>MBA from IIM Ahmedabad</li>
    </ul>
  </div>
)];

const highlightArray = [...array, ...array];


export default function Highlights() {
  const [activeDiv, setActiveDiv] = useState(3);

  useEffect(() => {
    for (let i = 0; i < highlightArray.length; i++) {
      document.getElementById(i).classList.add('inactive');
      document.getElementById(i).classList.remove('next');
      document.getElementById(i).classList.remove('prev');
    }
    document.getElementById(activeDiv).classList.remove('inactive');
    document.getElementById(activeDiv + 1).classList.remove('inactive');
    document.getElementById(activeDiv - 1).classList.remove('inactive');
    document.getElementById(activeDiv + 1).classList.add('next');
    document.getElementById(activeDiv - 1).classList.add('prev');

    function handleKeyDown(event) {
      if (event.key === 'ArrowRight') {
        handleRight();
      }
      else if (event.key === 'ArrowLeft') {
        handleLeft();
      }
    }

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  })

  const handleRight = () => {
    if (activeDiv + 2 >= highlightArray.length) {
      setActiveDiv(2);
    }
    else setActiveDiv(prev => prev + 1);
  }

  const handleLeft = () => {
    if (activeDiv < 2) {
      setActiveDiv(highlightArray.length - 3);
    }
    else setActiveDiv(prev => prev - 1);
  }

  return (
    <div>
      <div className="highlight-container">
        {highlightArray.map((content, index) => (<div id={index} className='highlight-tile inactive'>{content}</div>))}
        <div className='buttons-div'>
          <button onClick={handleLeft} className='right-button'><i class="fa-solid fa-chevron-left"></i></button>
          <button onClick={handleRight} className='right-button'><i class="fa-solid fa-chevron-right"></i></button>
        </div>
      </div>

    </div>
  );


}

