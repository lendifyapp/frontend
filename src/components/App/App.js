import React, {Fragment} from 'react';
import './_App.scss';
import Header from '../Header/Header';
import About from '../About/About';

function App() {
  return (
    <Fragment>
      <Header></Header>
      <About></About>
    </Fragment>
  );
}

export default App;
