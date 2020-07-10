/**
 *
 * P
 *
 

import React from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

function P() {
  return (
    <div>
      <FormattedMessage {...messages.header} />
    </div>
  );
}

P.propTypes = {};

export default P;
*/


import styled from 'styled-components';

const P = styled.p`
  font-size: 1.5em;
`;

export default P;