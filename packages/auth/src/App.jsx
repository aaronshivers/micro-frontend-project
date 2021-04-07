import React from 'react';
import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import { Switch, Route, Router } from 'react-router-dom';

// import Landing from './components/Landing';
// import Pricing from './components/Pricing';

const generateClassName = createGenerateClassName({
  productionPrefix: 'au',
});

const App = ({ history }) => (
  <StylesProvider generateClassName={generateClassName}>
    <Router history={history}>
      <Switch>
        {/* <Route */}
        {/*  exact */}
        {/*  path="/pricing" */}
        {/*  component={Pricing} */}
        {/* /> */}
        {/* <Route */}
        {/*  path="/" */}
        {/*  component={Landing} */}
        {/* /> */}
      </Switch>
    </Router>
  </StylesProvider>
);

App.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default App;
