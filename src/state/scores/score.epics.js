//rxjs imports
import { Observable } from 'rxjs';
import 'rxjs/add/observable/merge';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/mapTo';
import 'rxjs/add/operator/merge';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/filter'

//vendor imports
import {combineEpics} from 'redux-observable';

//app imports
import {
  SET_SCORE_REL,
  REMATCH,
  NEW_GAME,
} from '../../action-types';
import {
  roundEnding,
  roundEnded,
} from "../round/round.actions";

const ROUND_LENGTH = 6000;
const ROUND_TRANSITION_TIME = 2000;

function setScoreRelEpic(action$) {
  let setScoreRel$ = action$.ofType(SET_SCORE_REL);

  return Observable.merge(
    setScoreRel$
      .debounceTime(ROUND_LENGTH - ROUND_TRANSITION_TIME)
      .takeUntil(action$.filter((action) => action.type === REMATCH || action.type === NEW_GAME))
      .mapTo(roundEnding()),
    setScoreRel$
      .debounceTime(ROUND_LENGTH)
      .takeUntil(action$.filter((action) => action.type === REMATCH || action.type === NEW_GAME))
      .mapTo(roundEnded())
  );
}

export const scoreEpics = combineEpics(
  setScoreRelEpic
);


