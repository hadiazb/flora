import React, { Fragment, useState, useEffect } from 'react';
import './styles/global.scss';
import Header from './components/Header/index';
import Banner from './components/Banner/index'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Loading from './components/Loading/index';

function App() {

  const [flag, setFlag] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setFlag(true)
    }, 4000);
  })
  console.log(flag);

  const renderHome = () => {
    if (!flag) {
      return (
        <Loading/>
      )
    } else {
      return (
        <Fragment>
          <Header/>
          <Banner/>
        </Fragment>
      )
    }
  }

  return (
    renderHome()
  );
}

export default App;
