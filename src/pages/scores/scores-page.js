import React from 'react';
import {connect} from "react-redux";

import {Summery} from './game-summery/summery';
import {PlayerScoresList} from './player-scores-list/player-scores-list';

const propTypes = {
};

const mapStateToProps = () => {
  return {};
};

const mapDispatchToProps = () => {
  return {};
};

export const ScoresPage = connect(
  mapStateToProps,
  mapDispatchToProps
)(() => (
  <div>
    <Summery />
    <PlayerScoresList />
  </div>
));

ScoresPage.propTypes = propTypes;
