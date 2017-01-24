import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';

import players from './state/players/players.reducer';
import scores from './state/scores/scores.reducer';
import round from './state/round/round.reducer';

const reducer = combineReducers({
  routing: routerReducer,
  players,
  scores,
  round,
});

export default reducer;
