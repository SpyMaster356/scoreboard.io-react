import {
  NEW_GAME,
  REMATCH,
} from '../../action-types';

export function newGame() {
  return {
    type: NEW_GAME
  }
}

export function rematch() {
  return {
    type: REMATCH
  }
}
