import React from 'react';

import PropTypes from 'prop-types';
import classes from './footer.module.scss';

function Footer({ onShowMore }) {
  return (
    <div className={classes.footer} onClick={onShowMore}>
      ПОКАЗАТЬ ЕЩЕ 5 БИЛЕТОВ!
    </div>
  );
}

Footer.propTypes = {
  onShowMore: PropTypes.func.isRequired,
};

export default Footer;
