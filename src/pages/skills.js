import React, {Fragment} from 'react';

const styles  = {
  page: {
    // width: '100%',
    // maxHeight: '400px',
    padding: '16px 0 16px 0',
    gridColumn: '2 / span 3',
    // gridAutoFlow: 'column dense',
  },

  subHeader: {
    fontFamily: "'Montserrat Alternates', sans-serif",
    // marginLeft: 'calc(4/13)%',
    // zIndex: '3',
    // perspective: '3px',
    // transform: ' scale(1.5)',
  },
  items: {
    margin: '3px 0 3px 5px',
  },
  skillBlock:{
    height: '1em',
    display: 'inline',
    margin: '3px 0 3px 5px',
    backgroundColor: 'blue',
    borderRadius: '.5em',
  },
  colorContainer: {
    backgroundColor: '#4abef2',
    gridColumn: 'first-line/ last-line',
    margin: '5% -5% 0 -5%',
    padding: '0 5%',
    // width: '100vw',
    // overflowX: 'hidden',
    // overflowY: 'auto',
    // perspective: '2px',
    // transform: 'translateZ(-1px) scale(1.5)',
    // zIndex: '-1',
  },
  column: {
    gridColumn: 'span 1',
  },
  gridContainer: {
    display: 'grid',
    gridTemplateRows: '1fr',
    gridTemplateColumns: 'repeat(3, minmax(175px, 1fr))',
  },
}

const Item = (props) => {
  return (
    <div style={styles.items}>
      <span>{props.children}</span>
    </div>
  )
}

const skills = (style) => {
  console.log('style on Skills page: ', style)
  return (
    <Fragment>
       <div style={styles.colorContainer}>
          <h2 style={styles.subHeader}>Skills</h2>
        </div>
      <div style={Object.assign({},styles.page, style)}>
        <div style={styles.gridContainer}>
          <div style={styles.column}>
            <h3 style={styles.subHeader}>Languages</h3>
            <Item >JavaScript</Item>
            <Item >TypeScript</Item>
            <Item >Ruby</Item>
            <Item >PHP</Item>
            <Item >SQL</Item>
            <Item >Unit Testing with Jest</Item>
          </div>
          <div style={styles.column}>
            <h3 style={styles.subHeader}>Frameworks<br/>/ Libraries</h3>
            <Item >React.js</Item>
            <Item >Material-UI</Item>
            <Item >Materiailze-UI</Item>
            <Item >Bootstrap</Item>
          </div>
          <div style={styles.column}>
            <h3 style={styles.subHeader}>Tools</h3>
            <Item >Git</Item>
            <Item >Github, Bitbucket</Item>
            <Item >Agile/Scrum</Item>
            <Item >PostgreSQL</Item>
            <Item >Docker</Item>
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default skills;