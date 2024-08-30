// import React from 'react';
// import classes from './ticket.module.scss';
//
// function Ticket({ ticket }) {
//   const { price, carrier, segments } = ticket;
//   const [segmentTo, segmentFrom] = segments;
//
//   return (
//     <div className={classes['ticket-container']}>
//       <div className={classes.price}>{price} P</div>
//       <div className={classes.airlines}>{carrier}</div>
//
//       <div className={classes['time-to']}>
//         {segmentTo.origin}-{segmentTo.destination}
//         <div className={classes.info}>{segmentTo.date}</div>
//       </div>
//
//       <div className={classes['duration-to']}>
//         В ПУТИ
//         <div className={classes.info}>{segmentTo.duration}</div>
//       </div>
//
//       <div className={classes['transfers-to']}>
//         {segmentTo.stops.length} ПЕРЕСАДКИ
//         <div className={classes.info}>{segmentTo.stops.join(', ')}</div>
//       </div>
//       {/**/}
//       <div className={classes['time-from']}>
//         {segmentFrom.origin}-{segmentFrom.destination}
//         <div className={classes.info}>{segmentFrom.date}</div>
//       </div>
//
//       <div className={classes['duration-from']}>
//         В ПУТИ
//         <div className={classes.info}>{segmentFrom.duration}</div>
//       </div>
//
//       <div className={classes['transfers-from']}>
//         {segmentFrom.stops.length} ПЕРЕСАДКИ
//         <div className={classes.info}>{segmentFrom.stops.join(', ')}</div>
//       </div>
//     </div>
//   );
// }
//
// export default Ticket;

import React from 'react';
import { add, format } from 'date-fns';
import classes from './ticket.module.scss';

function Ticket({ ticket }) {
  const { price, carrier, segments } = ticket;
  const [segmentTo, segmentFrom] = segments;

  const formatDuration = (duration) => {
    const hours = Math.floor(duration / 60);
    const minutes = duration % 60;
    return `${hours}ч ${minutes}м`;
  };

  const formatTime = (dateString) => {
    const date = new Date(dateString);
    return format(date, 'HH:mm');
  };

  const addDurationToTime = (dateString, duration) => {
    const date = new Date(dateString);
    const newDate = add(date, { minutes: duration });
    return format(newDate, 'HH:mm');
  };

  return (
    <div className={classes['ticket-container']}>
      <div className={classes.price}>{price} P</div>
      <div className={classes.airlines}>{carrier}</div>

      <div className={classes['time-to']}>
        {segmentTo.origin} - {segmentTo.destination}
        <div className={classes.info}>
          {formatTime(segmentTo.date)} – {addDurationToTime(segmentTo.date, segmentTo.duration)}
        </div>
      </div>

      <div className={classes['duration-to']}>
        В ПУТИ
        <div className={classes.info}>{formatDuration(segmentTo.duration)}</div>
      </div>

      <div className={classes['transfers-to']}>
        {segmentTo.stops.length === 1
          ? '1 ПЕРЕСАДКА'
          : segmentTo.stops.length > 1
            ? `${segmentTo.stops.length} ПЕРЕСАДКИ`
            : 'БЕЗ ПЕРЕСАДОК'}
        <div className={classes.info}>{segmentTo.stops.join(', ')}</div>
      </div>

      <div className={classes['time-from']}>
        {segmentFrom.origin} - {segmentFrom.destination}
        <div className={classes.info}>
          {formatTime(segmentFrom.date)} – {addDurationToTime(segmentFrom.date, segmentFrom.duration)}
        </div>
      </div>

      <div className={classes['duration-from']}>
        В ПУТИ
        <div className={classes.info}>{formatDuration(segmentFrom.duration)}</div>
      </div>

      <div className={classes['transfers-from']}>
        {segmentFrom.stops.length === 1
          ? '1 ПЕРЕСАДКА'
          : segmentFrom.stops.length > 1
            ? `${segmentFrom.stops.length} ПЕРЕСАДКИ`
            : 'БЕЗ ПЕРЕСАДОК'}
        <div className={classes.info}>{segmentFrom.stops.join(', ')}</div>
      </div>
    </div>
  );
}

export default Ticket;
