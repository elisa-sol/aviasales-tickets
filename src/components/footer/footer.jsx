import React from 'react';
import classes from './footer.module.scss';

function Footer({ onShowMore }) {
  return (
    <div className={classes.footer} onClick={onShowMore}>
      ПОКАЗАТЬ ЕЩЕ 5 БИЛЕТОВ!
    </div>
  );
}

export default Footer;
