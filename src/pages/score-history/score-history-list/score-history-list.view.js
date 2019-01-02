import React, {PropTypes} from 'react';
import {
  Table,
  TableHeader,
  TableRow,
  TableHeaderColumn,
  TableBody,
  TableRowColumn,
} from 'material-ui';

const propTypes = {
  roundScores: PropTypes.arrayOf(PropTypes.shape({
    value: PropTypes.number.isRequired,
    round: PropTypes.number.isRequired,
    totalScore: PropTypes.number.isRequired,
  })).isRequired,

  onEditScore: PropTypes.func.isRequired,
};

export const ScoreHistoryListView = ({
  roundScores,

  onEditScore,
}) => (
  <Table className="scores-table" selectable={false}>
    <TableHeader
      displaySelectAll={false}
      adjustForCheckbox={false}
    >
      <TableRow>
        <TableHeaderColumn>Round</TableHeaderColumn>
        <TableHeaderColumn>Score</TableHeaderColumn>
        <TableHeaderColumn>Total</TableHeaderColumn>
      </TableRow>
    </TableHeader>
    <TableBody displayRowCheckbox={false}>
      {roundScores.map((score, index) => (
        <TableRow key={index}>
          <TableRowColumn>
            {score.round}
          </TableRowColumn>
          <TableRowColumn >
            <div className='score-value' onClick={(e) => onEditScore(e, score)}>
              {score.value >= 1 ? '+' + score.value : score.value}
            </div>
          </TableRowColumn>
          <TableRowColumn>
            {score.totalScore}
          </TableRowColumn>
        </TableRow>
      ))}
    </TableBody>
  </Table>
);

ScoreHistoryListView.propTypes = propTypes;
