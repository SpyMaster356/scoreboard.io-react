import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';

import players from './models/players/players.reducer';
import scores from './models/scores/scores.reducer';
import round from './models/round/round.reducer';

const reducer = combineReducers({
  routing: routerReducer,
  players,
  scores,
  round,
});

export default reducer;
