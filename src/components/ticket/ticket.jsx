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
import { format, parseISO, addSeconds } from 'date-fns';
import classes from './ticket.module.scss';

function Ticket({ ticket }) {
  const { price, carrier, segments } = ticket;
  const [segmentTo, segmentFrom] = segments;

  // Функция для форматирования времени в HH:mm
  const formatTime = (date) => format(parseISO(date), 'HH:mm');

  // Функция для вычисления конечного времени на основе продолжительности
  const calculateEndTime = (startDate, duration) => {
    const start = parseISO(startDate);
    const end = addSeconds(start, duration);
    return format(end, 'HH:mm');
  };

  // Функция для форматирования продолжительности из секунд в часы и минуты
  const formatDuration = (duration) => {
    const hours = Math.floor(duration / 3600);
    const minutes = Math.floor((duration % 3600) / 60);
    return `${hours}ч ${minutes}м`;
  };

  return (
    <div className={classes['ticket-container']}>
      <div className={classes.price}>{price} P</div>
      <div className={classes.airlines}>{carrier}</div>

      <div className={classes['time-to']}>
        {segmentTo.origin} - {segmentTo.destination}
        <div className={classes.info}>
          {formatTime(segmentTo.date)} – {calculateEndTime(segmentTo.date, segmentTo.duration)}
        </div>
      </div>

      <div className={classes['duration-to']}>
        В ПУТИ
        <div className={classes.info}>{formatDuration(segmentTo.duration)}</div>
      </div>

      <div className={classes['transfers-to']}>
        {segmentTo.stops.length} ПЕРЕСАДКИ
        <div className={classes.info}>{segmentTo.stops.join(', ')}</div>
      </div>

      <div className={classes['time-from']}>
        {segmentFrom.origin} - {segmentFrom.destination}
        <div className={classes.info}>
          {formatTime(segmentFrom.date)} – {calculateEndTime(segmentFrom.date, segmentFrom.duration)}
        </div>
      </div>

      <div className={classes['duration-from']}>
        В ПУТИ
        <div className={classes.info}>{formatDuration(segmentFrom.duration)}</div>
      </div>

      <div className={classes['transfers-from']}>
        {segmentFrom.stops.length} ПЕРЕСАДКИ
        <div className={classes.info}>{segmentFrom.stops.join(', ')}</div>
      </div>
    </div>
  );
}

export default Ticket;
