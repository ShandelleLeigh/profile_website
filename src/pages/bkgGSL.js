import React from 'react';
import GSL from '../assets/GSL_139KB.jpg'

const styles = {

}

const bkgGSL = () => {
  return (
    <div>
      <img
        style={styles.background}
        src={GSL}
        alt={`Island's reflection on Great Salt Lake`}
      />
    </div>
  )
}

export default bkgGSL;
