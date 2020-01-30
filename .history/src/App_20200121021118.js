import React, {Component} from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import Homepage from './pages/homepage/Homepage.component';
import ShopPage from './pages/shop/ShopPage.component';
import Header from './components/header/Header.component';
import Signinsignup from './pages/authentication/Signinsignup.component';

import { auth } from './firebase/firebase.utils';

class App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route exact path='/shop' component={ShopPage} />
        <Route exact path='/signin' component={Signinsignup} />
      </Switch>
    </div>
  );
}

export default App;
