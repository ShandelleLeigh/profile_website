import React from 'react';
import './App.css';
import Contact from './pages/contact';
import Education from './pages/education';
import AboutMe from './pages/aboutMe';

function App() {
  return (
    <div className="App">

      <div className='myName'>
        <div className='textContainer'>
          <h1>Hello, my name is Shandelle Lovato</h1>
          <p>I am a Front-End Web Developer</p>
        </div>
      </div>

      <div className='colorContainer'>
        <div className='profilePicture'>
          Picture
        </div>
      </div>
      <div className='content'>
        <AboutMe/>
        <Education/>
        <Contact/>
      </div>
    </div>
  );
}

export default App;
