import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import LeaderbordComponentView from './Components/Leaderbord.container';
import HomePage from './Components/Home/HomePage.container';

const Router = () => {
  return (
    <BrowserRouter>
      <div>
        <Switch>
          {/* <Route path="/matches" component={}/> */}
          <Route path="/" exact component={HomePage} />
          <Route path="/ranking" exact component={LeaderbordComponentView} />
          {/* <Route path="/team" component={}/>  */}
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default Router;
