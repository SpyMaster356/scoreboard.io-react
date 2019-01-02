import {PropTypes} from 'react';
import {connect} from 'react-redux';

import {AppbarView} from './appbar.view';

const ownPropTypes = {
  curLocation: PropTypes.shape(),
};

const mapStateToProps = (state, ownProps) => {
  return {
    showBackBtn: ownProps.curLocation.pathname !== '/',
  };
};

const mapDispatchToProps = () => {
  return {};
};

export const Appbar = connect(
  mapStateToProps,
  mapDispatchToProps
)(AppbarView);

Appbar.propTypes = ownPropTypes;
