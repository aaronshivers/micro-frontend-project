import React from 'react';
import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Landing from './components/Landing';
import Pricing from './components/Pricing';

const generateClassName = createGenerateClassName({
  productionPrefix: 'ma',
});

const App = () => (
  <StylesProvider generateClassName={generateClassName}>
    <BrowserRouter>
      <Switch>
        <Route
          exact
          path="/pricing"
          component={Pricing}
        />
        <Route
          path="/"
          component={Landing}
        />
      </Switch>
    </BrowserRouter>
  </StylesProvider>
);

export default App;
