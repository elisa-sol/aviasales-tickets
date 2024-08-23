import React from 'react';
import classes from './sidebar.module.scss';

function Sidebar() {
  return (
    <div className={classes['sidebar-container']}>
      <div className={classes['sidebar-transfers']}>КОЛИЧЕСТВО ПЕРЕСАДОК</div>
      <label className={classes['sidebar-label']}>
        <input type="checkbox" name="all" className={classes['sidebar-checkbox']} /> Все
      </label>
      <label className={classes['sidebar-label']}>
        <input type="checkbox" name="zero" className={classes['sidebar-checkbox']} /> Без пересадок
      </label>
      <label className={classes['sidebar-label']}>
        <input type="checkbox" name="one" className={classes['sidebar-checkbox']} /> 1 пересадка
      </label>
      <label className={classes['sidebar-label']}>
        <input type="checkbox" name="two" className={classes['sidebar-checkbox']} /> 2 пересадки
      </label>
      <label className={classes['sidebar-label']}>
        <input type="checkbox" name="three" className={classes['sidebar-checkbox']} /> 3 пересадки
      </label>
    </div>
  );
}

export default Sidebar;
