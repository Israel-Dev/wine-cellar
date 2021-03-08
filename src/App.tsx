import React from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

import AppStyle from './App.styled'
import GlobalStyle from './utils/Global-styles'
import List from './Home/List'
import Information from './Detail/Information';
import NewBottle from './Add/New-Boottle';


const App = () => {
  return (
    <>
      <GlobalStyle />
      <AppStyle className="app-wrapper">
        <header className="app-title">
          <h1>Wine Cellar</h1>
        </header>
        <Router>
          <Switch>
            <Route path={["/", "/home"]} component={List} exact />
            <Route path="/details" component={Information} />
            <Route path="/new-bootle" component={NewBottle} />
          </Switch>
        </Router>
      </AppStyle>
    </>
  );
}

export default App;
