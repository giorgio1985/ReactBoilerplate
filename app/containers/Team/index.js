/**
 *
 * Team
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import ShowTeam from './ShowTeam';
import makeSelectTeam from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';

export function Team() {
  useInjectReducer({ key: 'team', reducer });
  useInjectSaga({ key: 'team', saga });

  return (
    <div>
      <ShowTeam>
        <FormattedMessage {...messages.header} />
      </ShowTeam>
    </div>
  );
}

Team.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  team: makeSelectTeam(),
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

export default compose(withConnect)(Team);
