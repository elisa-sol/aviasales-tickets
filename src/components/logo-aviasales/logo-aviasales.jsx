import React from 'react';

import classes from './logo.module.scss';
import img from '../../assets/logo.svg';

function Logo() {
  return (
    <div className={classes['container-logo']}>
      <img alt="plane" src={img} className={classes.logo} />
    </div>
  );
}

export default Logo;
