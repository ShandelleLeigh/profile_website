import React from 'react';

const styles = {
  pink: {
    backgroundColor: 'pink',
  },
  blue: {
    backgroundColor: 'blue',
  },
};

const DividerLine = (color) => {
  return (
    <div style={`styles.${color}`}>

    </div>
  )
}