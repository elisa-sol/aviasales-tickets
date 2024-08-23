import React from 'react';
import classes from './header.module.scss';

function Header() {
  return (
    <div className={classes['header-container']}>
      <div className={classes['header-title']}>САМЫЙ ДЕШЕВЫЙ</div>
      <div className={classes['header-title']}>САМЫЙ БЫСТРЫЙ</div>
      <div className={classes['header-title']}>ОПТИМАЛЬНЫЙ</div>
    </div>
  );
}

export default Header;
