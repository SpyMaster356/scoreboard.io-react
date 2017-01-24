import React, {PropTypes} from 'react';
import muiThemeable from 'material-ui/styles/muiThemeable';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import {
  IconMenu,
  MenuItem,
  IconButton,
  Divider,
} from 'material-ui';

const propTypes = {
  onRematch: PropTypes.func.isRequired,
  onNewGame: PropTypes.func.isRequired,
  onAbout: PropTypes.func.isRequired,
};

export const AppbarMenuView = muiThemeable()(
  ({
    muiTheme,
    onRematch,
    onNewGame,
    onScoreHistory,
    onAbout,
  }) => (
    <IconMenu
      iconButtonElement={(
        <IconButton>
          <MoreVertIcon color={muiTheme.palette.alternateTextColor} />
        </IconButton>
      )}
    >
      <MenuItem primaryText="Rematch" onClick={onRematch} />
      <MenuItem primaryText="New Game" onClick={onNewGame}/>
      <Divider />
      <MenuItem primaryText="Score History" onClick={onScoreHistory}/>
      <Divider />
      <MenuItem primaryText="About" onClick={onAbout}/>
    </IconMenu>
  )
);

AppbarMenuView.propTypes = propTypes;
