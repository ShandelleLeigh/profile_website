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

const resume = () => {
  return (
    <div>
      <h2 style={styles.subHeader}>Work History</h2>
      <div>
        <h4 style={styles.titleName}>Jr Web Developer</h4>
        &nbsp;• Bittercreeck Technology, Inc •&nbsp;
        <i>Salt Lake City, Utah •&nbsp;</i>
        May, 2018 - current
      </div>
      <div>
        <h4 style={styles.titleName}>Sales Associate / Casheir</h4>
        &nbsp;• Michael's •&nbsp;
        <i>West Valley City, Utah •&nbsp;</i>
        October, 2014 - December, 2017
      </div>
      <div>
        <h4 style={styles.titleName}>Assistant Event Coordinator</h4>
          &nbsp;• Louland Falls •&nbsp;
          <i>Salt Lake City, Utah •&nbsp;</i>
          March, 2017 - October, 2014
      </div>
    </div>
  )
}

export default resume