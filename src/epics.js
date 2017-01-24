import {combineEpics} from 'redux-observable';

import {scoreEpics} from './models/scores/score.epics';
import {playerEpics} from './models/players/player.epics';

const epics = combineEpics(
  scoreEpics,
  playerEpics,
);

export default epics;
