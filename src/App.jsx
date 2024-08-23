import React from 'react';
import classes from './app.module.scss';
import Logo from './components/logo-aviasales/logo-aviasales';
import Sidebar from './components/sidebar/sidebar';
import Header from './components/header/header';
import Ticket from './components/ticket/ticket';

function App() {
  return (
    <div className={classes.app}>
      <Logo />
      <div className={classes['sidebar-header']}>
        <Sidebar />
        <div>
          <Header />
          <Ticket />
        </div>
      </div>
    </div>
  );
}
export default App;
