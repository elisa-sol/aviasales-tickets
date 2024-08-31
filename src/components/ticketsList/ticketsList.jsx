import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import classes from './ticketsList.module.scss';
import { showMoreTickets } from '../../redux/actions';
import { getSearchId } from '../../redux/ticketsActions';
import Footer from '../footer/footer';
import Loader from '../loader/loader';
import Ticket from '../ticket/ticket';

function TicketsList() {
  const dispatch = useDispatch();
  const tickets = useSelector((state) => state.filteredTickets);
  const isLoading = useSelector((state) => state.isLoading);
  const isComplete = useSelector((state) => state.isComplete);
  const visibleTicketsCount = useSelector((state) => state.visibleTicketsCount);
  const checkboxes = useSelector((state) => state.checkboxes);

  useEffect(() => {
    dispatch(getSearchId());
  }, [dispatch]);

  const showFiveMoreTickets = () => {
    dispatch(showMoreTickets());
  };

  const noCheckboxSelected = !checkboxes.zero && !checkboxes.one && !checkboxes.two && !checkboxes.three;

  return (
    <div className={classes['tickets-list']}>
      {isLoading && (
        <div className={classes['loader-container']}>
          <Loader />
        </div>
      )}
      {noCheckboxSelected && isComplete ? (
        <div style={{ paddingLeft: '25px' }}>Рейсов, подходящих под заданные фильтры, не найдено</div>
      ) : tickets.length > 0 ? (
        tickets.slice(0, visibleTicketsCount).map((ticket, index) => <Ticket key={index} ticket={ticket} />)
      ) : (
        !isComplete && <div style={{ paddingLeft: '25px' }} />
      )}
      {visibleTicketsCount < tickets.length && !isLoading && <Footer onShowMore={showFiveMoreTickets} />}
    </div>
  );
}

export default TicketsList;
