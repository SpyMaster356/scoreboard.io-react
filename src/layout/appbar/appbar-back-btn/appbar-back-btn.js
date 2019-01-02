import {connect} from 'react-redux';
import {push} from 'react-router-redux';

import {AppbarBackView} from './appbar-back-btn.view';

const ownPropTypes = {};

const mapStateToProps = () => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {
    onBack: function () {
      dispatch(push('/'));
    }
  };
};

export const AppbarBackBtn = connect(
  mapStateToProps,
  mapDispatchToProps
)(AppbarBackView);

AppbarBackBtn.propTypes = ownPropTypes;
