import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles';
import MarketingApp from './components/MarketingApp';
import Header from './components/Header';
import AuthApp from './components/AuthApp';

const generateClassName = createGenerateClassName({
  productionPrefix: 'co',
});

const App = () => (
  <Router>
    <StylesProvider generateClassName={generateClassName}>
      <Header />
      <Switch>
        <Route path="/auth" component={AuthApp} />
        <Route path="/" component={MarketingApp} />
      </Switch>
    </StylesProvider>
  </Router>
);

export default App;
