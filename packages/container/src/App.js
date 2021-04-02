import React from 'react';
import { mount } from 'marketing/MarketingApp';
import MarketingApp from './components/MarketingApp';

console.log(mount);

const App = () => (
  <>
    <div>Hi There</div>
    <hr />
    <MarketingApp />
  </>
);

export default App;
