import React from 'react';

const styles  = {
  subHeader: {
    fontFamily: "'Montserrat Alternates', sans-serif",
  },
  titleName: {
    fontFamily: "'Montserrat Alternates', sans-serif",
    fontWeight: 'regular',
    display: 'inline',
  },
}

const Education = () => {
  return (
    <div>
      <h2 style={styles.subHeader}>Education</h2>
      <div><h4 style={styles.titleName}>DevPoint Labs</h4> • U of U Proffessional Education • Full Stack Web Development • April 20, 2018 • Salt Lake City, Utah</div>
      <div><h4 style={styles.titleName}>BYU-Idaho</h4> • Bachelor's of Art - Integrated Studio Art • December 18, 2011 • Rexburg, Idaho</div>
      <div><h4 style={styles.titleName}>Salt Lake Community College</h4> • Associate's of Science - General Studies • June 6, 2009 • Taylorsville, Utah</div>
      <div><h4 style={styles.titleName}>Hunter High School</h4> • Diploma of Merit - Honors • June 6, 2009 • West Valley City, Utah</div>
    </div>
  )
}

export default Education;