import React from 'react';
import classes from './app.module.scss';
import Logo from './components/logo-aviasales/logo-aviasales';
import Sidebar from './components/sidebar/sidebar';

function App() {
  return (
    <div className={classes.app}>
      <Logo />
      <Sidebar />
    </div>
  );
}
export default App;
