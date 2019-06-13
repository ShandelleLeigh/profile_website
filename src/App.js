import React, { useEffect }  from 'react';
import './App.css';
import Contact from './pages/contact';
import Education from './pages/education';
import AboutMe from './pages/aboutMe';
import ProfileImage from './assets/ProfilePic.jpg'
import Skills from './pages/skills';
// import Layout from './pages/layout';

const styles = {
  profileImage: {
    maxWidth: '100%',
    maxHeight: '100%',
    // borderRadius: '300px',
  },
  imageContainer: {
    maxWidth: '300px',
    maxHeight: '300px',
    borderRadius: '300px',
    margin: '20px',
    border: '2px white solid',
    boxShadow: '0px .5px 5px .5px #383757',
  },
}


function App() {

  useEffect(()=>{
    window.addEventListener('scroll', (event) => {
      var elmnt = document.getElementsByClassName('App')
      var x = elmnt.scrollLeft;
      var y = window.scrollTop;
      console.log('event: ', event, '\ny: ',y, '\nx: ',x, '\nelmnt: ', elmnt/*'\ntop: ',top,*/)
    })
    return function cleanup() {
      /* TODO: remove event listener here */
    }
  })

  return (
    <div className="App" >
      <div className='myName'>
        <div className='textContainer'>
          <h1>Hello, my name is Shandelle Lovato</h1>
          <p>
            I'm a Front-End Web Developer,
            currently based out of
            Salt Lake City, Utah.
          </p>
        </div>
      </div>

      <div className='colorContainer' style={{marginLeft: `${document.getElementsByClassName('App').scrollTop}px`}}>
        <div className='profilePicture'>
          {/* <img
            style={styles.profileImage}
            src={ProfileImage}
            alt={'Shandelle'}
          /> */}
        </div>
      </div>
      <div className='content'>
        <AboutMe/>
        <Skills/>
        <Education/>
        <Contact/>
      </div>
      {/* <Layout/> */}
    </div>
  );
}

export default App;
