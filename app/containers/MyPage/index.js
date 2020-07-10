/**
 *
 * MyPage    { }    
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { loadFeaturedEvents, loadEvents } from './actions';
import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import { makeFeaturedEventsSelector, makeEventsSelector } from './selectors';//da vedere l'utilita di makeSelectMyPage
import reducer from './reducer';
import saga from './saga';
import messages from './messages';

export class MyPage extends React.Component {

  componentDidMount() {  //Per il trigger
   loadEvents('22222', 4, 43, '');
   loadFeaturedEvents('5555', 33, 6);
  }


  render()  { 
  useInjectReducer({ key: 'myPage', reducer });
  useInjectSaga({ key: 'myPage', saga });

  const featuredEvents =  { ...this.props.featuredEvents };
  const events =  { ...this.props.events  };
return (
    <div>
      <Helmet>
        <title>MyPage</title>
        <meta name="description" content="Description of MyPage" />
      </Helmet>
      <FormattedMessage {...messages.header} />
    </div>
  );
 }
}

MyPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
  featuredEvents: PropTypes.array,
  events: PropTypes.array
};
console.log(MyPage.propTypes);

const mapStateToProps = createStructuredSelector({
 // myPage: makeSelectMyPage(),                         // Here the selectors created in selector.js file
  featuredEvents: makeFeaturedEventsSelector(),
  events: makeEventsSelector()
});

function mapDispatchToProps(dispatch) { // to load events
  return {
    loadEvents: (tennantId, skip, take, searchTerm) => dispatch(loadEvents(tennantId, skip, take, searchTerm)),
    loadFeaturedEvents: (tennantId, skip, take) => dispatch(loadFeaturedEvents(tennantId, skip, take))
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(MyPage);
