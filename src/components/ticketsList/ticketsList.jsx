import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getSearchId } from '../../redux/ticketsActions.js';
import { showMoreTickets } from '../../redux/actions.js';
import Ticket from '../ticket/ticket';
import classes from './ticketsList.module.scss';

import Footer from '../footer/footer.jsx';

function TicketsList() {
  const dispatch = useDispatch();
  const tickets = useSelector((state) => state.tickets);
  const loading = useSelector((state) => state.loading);
  const visibleTicketsCount = useSelector((state) => state.visibleTicketsCount);

  useEffect(() => {
    dispatch(getSearchId());
  }, [dispatch]);

  const showFiveMoreTickets = () => {
    dispatch(showMoreTickets());
  };

  if (loading) return <div>Loading...</div>;

  return (
    <div className={classes['tickets-list']}>
      {tickets.length > 0 ? (
        tickets.slice(0, visibleTicketsCount).map((ticket, index) => <Ticket key={index} ticket={ticket} />)
      ) : (
        <div style={{ paddingLeft: '25px' }}>Рейсов, подходящих под заданные фильтры, не найдено</div>
      )}
      {visibleTicketsCount < tickets.length && <Footer onShowMore={showFiveMoreTickets} />}
    </div>
  );
}

export default TicketsList;
