import {connect} from 'react-redux';

import {AboutPageView} from './about-page.view';

const propTypes = {};

const mapStateToProps = () => {
  return {};
};

const mapDispatchToProps = () => {
  return {};
};

export const AboutPage = connect(
  mapStateToProps,
  mapDispatchToProps
)(AboutPageView);

AboutPage.propTypes = propTypes;
