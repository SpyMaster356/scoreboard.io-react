import React, {PropTypes} from 'react';
import {
  SelectField,
  MenuItem,
} from 'material-ui';

import {playerPropType} from "../../../state/players/player.prop-types";

const propTypes = {
  players: PropTypes.arrayOf(playerPropType).isRequired,
  selectedId: PropTypes.number,

  onPlayerSelect: PropTypes.func.isRequired,
};

export const PlayerSelectView = ({
  players,
  selectedId,

  onPlayerSelect,
}) => (
  <SelectField
    fullWidth={true}
    floatingLabelText="Player"
    value={selectedId}
    onChange={onPlayerSelect}
  >
    {players.map(player => (
      <MenuItem key={player.id} value={player.id} primaryText={player.name}/>
    ))}
  </SelectField>
);

PlayerSelectView.propTypes = propTypes;
