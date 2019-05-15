import React from 'react';
import LinkedIn from '../assets/LinkedIn';
import '../App.css';

const styles = {
  link: {
    fontFamily: "-apple-system, BlinkMacSystemFont,'Roboto', 'Oxygen','Ubuntu', 'Cantarell','Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
    textDecoration: 'none',
    '&:focus': {textDecoration: 'none'},
    '&:hover': {textDecoration: 'none'},
    '&:visited': {textDecoration: 'none'},
    '&:link': {textDecoration: 'none'},
    '&:active': {textDecoration: 'none'},
    height: '34px',
    lineHeight: '34px',
  },
  inLine: {
    fontSize:'16px',
    color:"#0077B5",
    display:'inline-block',
    lineHeight: '34px',
  },
  subHeader: {
    fontFamily: "'Montserrat Alternates', sans-serif",
  },
}

const Contact = () => {
  return (
    <div >
      <h2 style={styles.subHeader}>Contact&nbsp;</h2>
      <div>
        <b>Phone&nbsp;</b>
        801-699-8298
      </div>
      <div>
        <b>Email&nbsp;</b>
        ShandelleLovato@gmail.com
      </div>
      <div

      >
        <a
          target="_blank"
          href='https://www.linkedin.com/in/shandelle-lovato-10b635102/'
          style={styles.link}
        >
          <LinkedIn/>
          <span style={styles.inLine} >
            &nbsp;LinkedIn
          </span>
        </a>
      </div>
    </div>
  )
}

export default Contact;