import {connect} from 'react-redux';

import {ScoreHistoryPageView} from './score-history-page.view';
import {setRoundScore} from "../../state/scores/score.actions";

const propTypes = {};

const mapStateToProps = () => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {
    onDoneScoreEdit: (changedScore) => {
      dispatch(setRoundScore(
        changedScore.playerId,
        changedScore.round,
        changedScore.value
      ));
    }
  };
};

export const ScoreHistoryPage = connect(
  mapStateToProps,
  mapDispatchToProps
)(ScoreHistoryPageView);

ScoreHistoryPage.propTypes = propTypes;
