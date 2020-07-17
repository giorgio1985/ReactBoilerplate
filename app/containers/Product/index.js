/**
 *
 * Product
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
import Hr from 'components/Hr';
import H3 from 'components/H3';
import makeSelectProduct from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';
import ShowProduct from './ShowProduct';

export function Product() {
  useInjectReducer({ key: 'product', reducer });
  useInjectSaga({ key: 'product', saga });

  return (
    <div>
      <ShowProduct>
        <FormattedMessage {...messages.header} />
      </ShowProduct>
      <Hr />
      <div style={{ textAlign: 'center ' }}>
        <H3>Working in progress ..</H3>
      </div>
    </div>
  );
}

Product.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  product: makeSelectProduct(),
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

export default compose(withConnect)(Product);
