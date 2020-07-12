/**
 *
 * Portfolio
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import makeSelectPortfolio from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';
import ShowPortfolio from './ShowPortfolio';

export function Portfolio() {
  useInjectReducer({ key: 'portfolio', reducer });
  useInjectSaga({ key: 'portfolio', saga });

  return (
    <div>
      <Helmet>
        <title>Portfolio</title>
        <meta name="description" content="Description of Portfolio" />
      </Helmet>

      <ShowPortfolio>
        <FormattedMessage {...messages.header} />
      </ShowPortfolio>
    </div>
  );
}

Portfolio.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  portfolio: makeSelectPortfolio(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(Portfolio);
