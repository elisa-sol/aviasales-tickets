import React from 'react';

import { useSelector, useDispatch } from 'react-redux';

import classes from './sidebar.module.scss';
import { toggleCheckbox } from '../../redux/actions';

function Sidebar() {
  const checkboxes = useSelector((state) => state.checkboxes);
  const dispatch = useDispatch();

  const handleCheckboxChange = (e) => {
    const { name } = e.target;
    dispatch(toggleCheckbox(name));
  };

  return (
    <div className={classes['sidebar-container']}>
      <div className={classes['sidebar-transfers']}>КОЛИЧЕСТВО ПЕРЕСАДОК</div>
      <label className={classes['sidebar-label']}>
        <input
          type="checkbox"
          name="all"
          className={classes['sidebar-checkbox']}
          checked={checkboxes.all}
          onChange={handleCheckboxChange}
        />
        Все
      </label>
      <label className={classes['sidebar-label']}>
        <input
          type="checkbox"
          name="zero"
          className={classes['sidebar-checkbox']}
          checked={checkboxes.zero}
          onChange={handleCheckboxChange}
        />
        Без пересадок
      </label>
      <label className={classes['sidebar-label']}>
        <input
          type="checkbox"
          name="one"
          className={classes['sidebar-checkbox']}
          checked={checkboxes.one}
          onChange={handleCheckboxChange}
        />
        1 пересадка
      </label>
      <label className={classes['sidebar-label']}>
        <input
          type="checkbox"
          name="two"
          className={classes['sidebar-checkbox']}
          checked={checkboxes.two}
          onChange={handleCheckboxChange}
        />
        2 пересадки
      </label>
      <label className={classes['sidebar-label']}>
        <input
          type="checkbox"
          name="three"
          className={classes['sidebar-checkbox']}
          checked={checkboxes.three}
          onChange={handleCheckboxChange}
        />
        3 пересадки
      </label>
    </div>
  );
}

export default Sidebar;
