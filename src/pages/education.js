import React, {Fragment} from 'react';

const styles  = {
  subHeader: {
    fontFamily: "'Montserrat Alternates', sans-serif",
    // borderImage: `linear-gradient(
    //   to right,
    //   red,
    //   rgba(0, 0, 0, 0)
    // ) 1 100%`,
    // borderBottom: 'solid 3px #8ecce4',
  },
  titleName: {
    fontFamily: "'Montserrat Alternates', sans-serif",
    fontWeight: 'regular',
    display: 'inline',
  },
  colorContainer: {
    backgroundColor: '#4abef2',
    gridColumn: 'first-line/ last-line',
    margin: '15% -5% 0 -5%',
    padding: '0 5%',
  },
  listItem: {
    margin: '4% 0 2% 0'
  },
  p: {
    marginBlockStart: '.5em',
    marginBlockEnd: '.5em',
  },

}

const Education = () => {
  return (
    <Fragment>
      <div style={styles.colorContainer}>
        <h2 style={styles.subHeader}>Education</h2>
      </div>
      <div style={styles.listItem}>
        <h4 style={styles.titleName}>DevPoint Labs</h4>
        <p style={styles.p}>U of U Professional Education: Full Stack Web Development </p>
        <p style={styles.p}>April 20, 2018</p>
        <p style={styles.p}>Salt Lake City, Utah</p>
      </div>
      <div style={styles.listItem}>
        <h4 style={styles.titleName}>BYU-Idaho</h4>
        <p style={styles.p}>Bachelor's of Art</p>
        <p style={styles.p}>December 18, 2011</p>
        <p style={styles.p}>Rexburg, Idaho</p>
      </div>
      <div style={styles.listItem}>
        <h4 style={styles.titleName}>Salt Lake Community College</h4>
        <p style={styles.p}>Associate's of Science</p>
        <p style={styles.p}>June 6, 2009</p>
        <p style={styles.p}>Taylorsville, Utah</p>
      </div>
      <div style={styles.listItem}>
        <h4 style={styles.titleName}>Hunter High School</h4>
        <p style={styles.p}>Diploma of Merit with Honors</p>
        <p style={styles.p}>June 6, 2009</p>
        <p style={styles.p}>West Valley City, Utah</p>
      </div>
    </Fragment>
  )
}

export default Education;