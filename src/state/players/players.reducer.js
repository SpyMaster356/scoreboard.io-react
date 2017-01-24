import {
  CREATE_PLAYER,
  NEW_GAME
} from '../../action-types';

let initialState = [];

export default function players(state = initialState, action) {
  switch (action.type) {
    case CREATE_PLAYER:
      return [
        ...state,
        action.payload.newPlayer
      ];
    case NEW_GAME:
      return [];
    default:
      return state;
  }
}
