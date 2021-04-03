import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles';
import MarketingApp from './components/MarketingApp';
import Header from './components/Header';

const generateClassName = createGenerateClassName({
  productionPrefix: 'co',
});

const App = () => (
  <Router>
    <StylesProvider generateClassName={generateClassName}>
      <Header />
      <MarketingApp />
    </StylesProvider>
  </Router>
);

export default App;
