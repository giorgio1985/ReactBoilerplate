/**
 *
 * Contact
 *
 */

import React from 'react';

import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import makeSelectContact from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';
import WelcomeContacts from './WelcomeContact';

export function Contact() {
  useInjectReducer({ key: 'contact', reducer });
  useInjectSaga({ key: 'contact', saga });

  return (
    <div>
      <WelcomeContacts>
        <FormattedMessage {...messages.header} />
      </WelcomeContacts>
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  contact: makeSelectContact(),
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

export default compose(withConnect)(Contact);
