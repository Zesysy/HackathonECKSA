import React from 'react';
import './App.css';


import TestFetchComponent from './Components/TestFetchComponent';

import Layout from './Components/Layout';
import Router from './Router';


function App() {
  return (
    <div>
      <TestFetchComponent />
      <Layout />
      <Router />
    </div>
  );
}
export default App;
