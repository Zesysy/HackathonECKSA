import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';
import LeaderbordComponentView from './Components/Leaderbord.container';
import MatchesContainer from './Components/Matches.container';

import HomePage from './Components/Home/HomePage.container';
import TeamPage from './Components/TeamPage.container';

const Router = () => {
  return (
    <BrowserRouter>
      <div>
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/matches" component={MatchesContainer} />
          <Route path="/ranking" component={LeaderbordComponentView} />
          <Route path="/team" component={TeamPage} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default Router;
