import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import MatchesContainer from './Components/Matches.container';
import HomePage from './Components/Home/HomePage.container';
import TeamPage from './Components/TeamPage.container';

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
