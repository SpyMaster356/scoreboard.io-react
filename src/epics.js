import {combineEpics} from 'redux-observable';

import {scoreEpics} from './state/scores/score.epics';
import {playerEpics} from './state/players/player.epics';

const epics = combineEpics(
  scoreEpics,
  playerEpics,
);

export default epics;
