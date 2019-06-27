import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import MatchesContainer from './Components/Matches.container';

const Router = () => {
  return (
    <BrowserRouter>
      <div>
        <Switch>
          {/* <Route path="/" exact component={}/> */}
          <Route path="/matches" component={MatchesContainer} />
          {/* <Route path="/ranking" component={}/>
          <Route path="/team" component={}/> */}
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default Router;
