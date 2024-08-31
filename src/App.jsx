import React from 'react';

import classes from './app.module.scss';
import Header from './components/header/header';
import Logo from './components/logo-aviasales/logo-aviasales';
import Sidebar from './components/sidebar/sidebar';
import TicketsList from './components/ticketsList/ticketsList';

function App() {
  return (
    <div className={classes.app}>
      <Logo />
      <div className={classes['sidebar-main']}>
        <Sidebar />
        <div className={classes['header-ticket']}>
          <Header />
          <TicketsList />
        </div>
      </div>
      <div className={classes['footer-container']} />
    </div>
  );
}

export default App;
