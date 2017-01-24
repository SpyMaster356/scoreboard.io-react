import React, {PropTypes} from 'react';
import muiThemeable from 'material-ui/styles/muiThemeable';
import ArrowBackIcon from 'material-ui/svg-icons/navigation/arrow-back';
import {
  IconButton,
} from 'material-ui';

const propTypes = {
  onBack: PropTypes.func.isRequired,
};

export const AppbarBackView = muiThemeable()(
  ({
    muiTheme,
    onBack,
  }) => (
    <IconButton onTouchTap={onBack}>
      <ArrowBackIcon color={muiTheme.palette.alternateTextColor}/>
    </IconButton>
  )
);

AppbarBackView.propTypes = propTypes;
