import React from 'react';
import {
  Router as ReactRouter,
  Route,
  IndexRoute
} from 'react-router';

import {MainLayout} from './layout/main-layout';
import {ScoresPage} from './pages/scores/scores-page';
import {ScoreHistoryPage} from './pages/score-history/score-history-page';
import {AboutPage} from './pages/about/about-page';

const Router = ({history}) => (
  <ReactRouter history={history}>
    <Route path="/" component={MainLayout}>
      <IndexRoute component={ScoresPage}/>
      <Route path="scores/history" component={ScoreHistoryPage}/>
      <Route path="about" component={AboutPage}/>
    </Route>
  </ReactRouter>
);

export default Router;
