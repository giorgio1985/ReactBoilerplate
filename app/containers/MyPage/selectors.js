import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the myPage state domain
 */

const selectMyPageDomain = state => state || initialState;



/**
 * Default selector used by MyPage
 */

const makeSelectMyPage = () =>   
  createSelector(
    selectMyPageDomain,
    substate => substate.toJS(),
  );


/**
 * Other specific selectors
 */

  const makeFeaturedEventsSelector = () =>
   createSelector(
     selectMyPageDomain,
     substate => substate.featuredEvents

   );

   const makeEventsSelector = () =>
   createSelector(
     selectMyPageDomain,
     substate => substate.events
   );

export default makeSelectMyPage;
 
export { selectMyPageDomain, makeFeaturedEventsSelector, makeEventsSelector };
