import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';
import LeaderbordComponentView from './Components/Leaderbord.container';
import MatchesContainer from './Components/Matches.container';

import HomePage from './Components/Home/HomePage.container';

const Router = () => {
  return (
    <BrowserRouter>
      <div>
        <Switch>
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default Router;
