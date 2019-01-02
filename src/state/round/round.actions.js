import {
  ROUND_STARTED,
  ROUND_ENDING,
  ROUND_ENDED
} from '../../action-types';

export function roundStarted() {
  return {
    type: ROUND_STARTED
  }
}

export function roundEnding() {
  return {
    type: ROUND_ENDING
  }
}

export function roundEnded() {
  return (dispatch, getState) => {
    let state = getState();

    dispatch({
      type: ROUND_ENDED,
      roundNumber: state.round.roundNumber,
    });
  }
}
