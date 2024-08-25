import React from 'react';
import classes from './app.module.scss';
import Logo from './components/logo-aviasales/logo-aviasales';
import Sidebar from './components/sidebar/sidebar';
import Header from './components/header/header';
import Ticket from './components/ticket/ticket';
import Footer from './components/footer/footer';

function App() {
  return (
    <div className={classes.app}>
      <Logo />
      <div className={classes['sidebar-main']}>
        <Sidebar />
        <div className={classes['header-ticket']}>
          <Header />
          <Ticket />
          <Footer />
        </div>
      </div>
      <div className={classes['footer-container']}></div>
    </div>
  );
}

export default App;
