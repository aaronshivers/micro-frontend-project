import React from 'react';
import { mount } from 'marketing/MarketingApp';
import MarketingApp from './components/MarketingApp';
import Header from './components/Header';

console.log(mount);

const App = () => (
  <>
    <Header />
    <MarketingApp />
  </>
);

export default App;
