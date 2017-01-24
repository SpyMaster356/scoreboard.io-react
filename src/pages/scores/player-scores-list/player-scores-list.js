import {connect} from 'react-redux';

import {PlayerScoresListView} from './player-scores-list.view';

const mapStateToProps = (state) => {
  return {
    playerIds: state.scores.map(score => score.playerId),
  }
};

const mapDispatchToProps = () => {
  return {}
};

export const PlayerScoresList = connect(
  mapStateToProps,
  mapDispatchToProps
)(PlayerScoresListView);
