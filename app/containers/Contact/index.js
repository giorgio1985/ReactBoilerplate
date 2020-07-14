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
import P from 'components/P';
import H3 from 'components/H3';
import HR from 'components/Hr';
import makeSelectContact from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';
import WelcomeContacts from './WelcomeContact';
import Section from './Section';

export function Contact() {
  useInjectReducer({ key: 'contact', reducer });
  useInjectSaga({ key: 'contact', saga });

  return (
    <div>
      <WelcomeContacts>
        <FormattedMessage {...messages.header} />
      </WelcomeContacts>
      <HR />
      <Section>
        <H3>Email:</H3>
        <P>giorgio.adonoo@senseisrl.it</P>
      </Section>
      <Section>
        <H3>Telefono:</H3>
        <P>+39 329*****</P>
      </Section>
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

// {}
