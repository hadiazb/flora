import React, { Fragment } from 'react';
import './styles/global.scss';
import Header from './components/Header/index';
import Banner from './components/Banner/index'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Fragment>
      <Header/>
      <Banner/>
    </Fragment>
  );
}

export default App;
