import React from 'react';
import classes from './ticket.module.scss';
import img from '../../assets/logo.svg';

function Ticket() {
  return (
    <div className={classes['ticket-container']}>
      {/*<div className={classes.line1}>*/}
      <div className={classes.price}>13 400 Р</div>
      <div className={classes.airlines}>
        <img alt="airlines" src={img} />
      </div>
      {/*</div>*/}

      {/*<div className={classes.line2}>*/}
      <div className={classes['time-to']}>
        MOW-HKT
        <div className={classes.info}>13-14</div>
      </div>

      <div className={classes['duration-to']}>
        В ПУТИ
        <div className={classes.info}>21ч 15м</div>
      </div>

      <div className={classes['transfers-to']}>
        2 ПЕРЕСАДКИ
        <div className={classes.info}>HGT, HYT</div>
      </div>
      {/*</div>*/}

      {/*<div className={classes.line3}>*/}
      <div className={classes['time-from']}>
        HKT-MOW
        <div className={classes.info}>15-16</div>
      </div>

      <div className={classes['duration-from']}>
        В ПУТИ
        <div className={classes.info}>12Ч</div>
      </div>

      <div className={classes['transfers-from']}>
        1 ПЕРЕСАДКА
        <div className={classes.info}>HGT</div>
      </div>
      {/*</div>*/}
    </div>
  );
}

export default Ticket;
