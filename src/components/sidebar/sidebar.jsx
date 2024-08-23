import React from 'react';
import classes from './sidebar.module.scss';

function Sidebar() {
  return (
    <div className={classes['sidebar-container']}>
      <div className={classes['amount-transfers']}>КОЛИЧЕСТВО ПЕРЕСАДОК</div>
      <label className={classes.label}>
        <input type="checkbox" name="all" className={classes.checkbox} /> Все
      </label>
      <label className={classes.label}>
        <input type="checkbox" name="zero" className={classes.checkbox} /> Без пересадок
      </label>
      <label className={classes.label}>
        <input type="checkbox" name="one" className={classes.checkbox} /> 1 пересадка
      </label>
      <label className={classes.label}>
        <input type="checkbox" name="two" className={classes.checkbox} /> 2 пересадки
      </label>
      <label className={classes.label}>
        <input type="checkbox" name="three" className={classes.checkbox} /> 3 пересадки
      </label>
    </div>
  );
}

export default Sidebar;
