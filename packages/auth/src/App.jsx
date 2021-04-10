import React from 'react';
import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import { Switch, Route, Router } from 'react-router-dom';

import Signin from './components/Signin';
import Signup from './components/Signup';

const generateClassName = createGenerateClassName({
  productionPrefix: 'au',
});

const App = ({ history, onSignIn }) => (
  <StylesProvider generateClassName={generateClassName}>
    <Router history={history}>
      <Switch>
        <Route path="/auth/signin">
          <Signin onSignIn={onSignIn} />
        </Route>
        <Route path="/auth/signup">
          <Signup onSignIn={onSignIn} />
        </Route>
      </Switch>
    </Router>
  </StylesProvider>
);

App.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
  onSignIn: PropTypes.func.isRequired,
};

export default App;
