import {
  CREATE_PLAYER,
  ADD_PLAYER,
} from '../../action-types';

export function createPlayer(newPlayer) {
  return {
    type: CREATE_PLAYER,
    payload: {
      newPlayer
    }
  }
}

export function addPlayer(playerId) {
  return {
    type: ADD_PLAYER,
    payload: {
      playerId
    }
  }
}
