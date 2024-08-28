import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setSorting } from '../../redux/actions';
import classes from './header.module.scss';

function Header() {
  const sorting = useSelector((state) => state.sorting);
  const dispatch = useDispatch();

  const handleSortChange = (type) => {
    dispatch(setSorting(type));
  };

  return (
    <div className={classes['header-container']}>
      <div
        className={`${classes['header-title']} ${sorting === 'CHEAPEST' ? classes['header-title-selected'] : ''}`}
        onClick={() => handleSortChange('CHEAPEST')}
      >
        САМЫЙ ДЕШЕВЫЙ
      </div>
      <div
        className={`${classes['header-title']} ${sorting === 'FASTEST' ? classes['header-title-selected'] : ''}`}
        onClick={() => handleSortChange('FASTEST')}
      >
        САМЫЙ БЫСТРЫЙ
      </div>
      <div
        className={`${classes['header-title']} ${sorting === 'OPTIMAL' ? classes['header-title-selected'] : ''}`}
        onClick={() => handleSortChange('OPTIMAL')}
      >
        ОПТИМАЛЬНЫЙ
      </div>
    </div>
  );
}

export default Header;
