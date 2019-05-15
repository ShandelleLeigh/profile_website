import React from 'react';

const styles  = {
  page: {
    width: '100%',
    backgroundColor: 'white',
    height: 'fit-content',
    padding: '16px 0 16px 0',
  },
  subHeader: {
    fontFamily: "'Montserrat Alternates', sans-serif",
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
}

const Item = (props) => {
  const {children, number} = props
  return (
    <div style={styles.items}>
      <span>{children}</span>
      <span style={Object.assign({},styles.skillBlock,{paddingRight: number + 'px'})}>&nbsp;</span>
    </div>
  )
}


const skills = (style) => {
  return (
    <div style={Object.assign({},styles.page,style)}>
      <h2 style={styles.subHeader}>Skills</h2>
        <h3 style={styles.subHeader}>Languages</h3>
          <Item number={100}>JavaScript</Item>
          <Item number={60}>TypeScript</Item>
          <Item number={70}>Ruby</Item>
          <Item number={30}>PHP</Item>
          <Item number={30}>SQL</Item>
          <Item number={30}>Unit Testing</Item>
        <h3 style={styles.subHeader}>Frameworks/Libraries</h3>
          <Item number={90}>React.js</Item>
          <Item number={90}>Material-UI</Item>
          <Item number={45}>Materiailze-UI</Item>
          <Item number={20}>Bootstrap</Item>
        <h3 style={styles.subHeader}>Tools</h3>
          <Item number={30}>Git</Item>
          <Item number={30}>Github, Bitbucket</Item>
          <Item number={30}>Agile/Scrum</Item>
          <Item number={15}>PostgreSQL</Item>
          <Item number={15}>Docker</Item>
    </div>
  )
}

export default skills;