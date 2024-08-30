import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getSearchId } from '../../redux/ticketsActions.js';
import Ticket from '../ticket/ticket';
import classes from './ticketsList.module.scss';

function TicketsList() {
  const dispatch = useDispatch();
  const tickets = useSelector((state) => state.tickets);
  const loading = useSelector((state) => state.loading);
  const error = useSelector((state) => state.error);

  useEffect(() => {
    dispatch(getSearchId());
  }, [dispatch]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className={classes['tickets-list']}>
      {tickets.length > 0 ? (
        tickets.map((ticket, index) => <Ticket key={index} ticket={ticket} />)
      ) : (
        <div>Рейсов, подходящих под заданные фильтры, не найдено</div>
      )}
    </div>
  );
}

export default TicketsList;
