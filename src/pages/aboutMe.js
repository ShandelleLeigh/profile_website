import React from 'react';
// import ProfileImage from '../assets/ProfilePic.jpg'
import GSL from '../assets/GSL_139KB.jpg'

const styles = {
  left: {
    backgroundColor: 'rgba(255,255,255,0.77)',
    border: 'white solid 2px',
    borderRadius: '16px',
    padding: '0 16px 0 16px',
    minWidth: '300px',
    minHeight: '300px',
    width: '33%',

  },
  profileImage: {
    maxWidth: '100%',
    maxHeight: '100%',
    borderRadius: '300px',
  },
  imageContainer: {
    maxWidth: '300px',
    maxHeight: '300px',
    borderRadius: '300px',
    margin: '20px',
    border: '2px white solid',
    boxShadow: '0px .5px 5px .5px #383757',
  },
  text: {
    // textAlign: 'left',
    // marginLeft: '4%',
    // marginRight: '4%',
  },
  p: {
    textAlign: 'left',
    gridColumn: '2/4',
    // marginLeft: '4%',
    // marginRight: '4%',
  },
  mainHeader: {
    marginTop: '33vh',
    fontFamily: "'Montserrat Alternates', sans-serif",
    // fontFamily: "'Handlee', sans-serif",
  },
  subHeader: {
    fontFamily: "'Montserrat Alternates', sans-serif",
  },
  background: {
    backgroundImage: GSL,
  }
}

const AboutMe = ( ) => {
  return (
    <div>
      {/* <img
        style={styles.background}
        src={GSL}
        alt={`Island's reflection on Great Salt Lake`}
      /> */}
      {/* <div style={styles.text}> */}
        {/* <h1 style={styles.mainHeader}>Hi, I'm Shandelle</h1> */}
        {/* <h4 style={styles.subHeader}>I'm a Front-End Web Developer, currently based out of Salt Lake City, Utah.</h4> */}
      {/* </div> */}
    {/* -- hidable: -- */}
      <div style={styles.p} >
        <p>Most of my experience is with Javascript, React.js, and Ruby</p>

        <p>
          Early 2018, I received training in Full-Stack
          Web Development at DevPoint Labs, a coding bootcamp and have been
          lucky enough to be working since, at Bittercreek Tech.
        </p>
        <p>
          Software development, especialy web development is something that has always interested me. I like that it's visual
          and involves logic and problem solving -- it feels like the perfect
          mix of art and science.
        </p>
        {/* <p>
          When I'm not with my laptop, I enjoy taking my camera with me on
          adventures. It helps me break out of my shell and try new things. I
          enjoy learning and making art.
        </p> */}
      </div>
      {/* <div style={styles.imageContainer}> */}
        {/* <img
          style={styles.profileImage}
          src={ProfileImage}
          alt={'Shandelle'}
        /> */}
      {/* </div> */}
    </div>
  )
}
export default AboutMe;