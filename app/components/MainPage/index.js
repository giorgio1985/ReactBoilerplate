/**
 *
 * MainPage
 *
 */

import React, { memo } from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

function MainPage() {
  return (
    <div>
      <FormattedMessage {...messages.header} />
    </div>
  );
}

MainPage.propTypes = {};

export default memo(MainPage);
