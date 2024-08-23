import React from 'react';
import img from '../../assets/logo.svg';
import classes from './logo.module.scss';

function Logo() {
  return (
    <div className={classes['container-logo']}>
      <img alt="plane" src={img} className={classes.logo}></img>
    </div>
  );
}

export default Logo;
