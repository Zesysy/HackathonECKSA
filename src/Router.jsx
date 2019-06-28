import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HomePage from './Components/Home/HomePage.container';

const Router = () => {
  return (
    <BrowserRouter>
      <div>
        <Switch>
          <Route path="/" exact component={HomePage} />
          {/* <Route path="/matches" component={}/>
          <Route path="/ranking" component={}/>
          <Route path="/team" component={}/> */}
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default Router;
