/*
 *
 * MyPage reducer
 *
 */
import { fromJS } from 'immutable';
import produce from 'immer';
import {
  LOAD_EVENTS, 
  LOAD_EVENTS_SUCCESS, 
  LOAD_EVENTS_ERROR,
  LOAD_FEATURED_EVENTS,   
  LOAD_FEATURED_EVENTS_SUCCESS,
  LOAD_FEATURED_EVENTS_ERROR
 } from './constants';

export const initialState = fromJS({
  featuredEvents: [],
  events: [],
  loading: false,
  error: true,
  loadingFeatured: false,
  errorFeatured: false
});

/* eslint-disable default-case, no-param-reassign */
const myPageReducer = (state = initialState, action) =>
  produce(state, (/* draft */) => {
    switch (action.type) {
      case LOAD_EVENTS:
        return state
        .set('loading', true)
        .set('error', false);
      //  break;
      case LOAD_EVENTS_SUCCESS:
        return state
        .set('loading', false)
        .set('error', false)
        .set('events', action.events);
       // break;
      case LOAD_EVENTS_ERROR:
        return state
        .set('loading', false)
        .set('error', action.error);
      //  break;
      case LOAD_FEATURED_EVENTS:
        return state
        .set('loadingFeatured', true)
        .set('errorFeatured', false);
      //  break;
      case LOAD_FEATURED_EVENTS_ERROR:
        return state
        .set('loadingFeatured', false)
        .set('errorFeatured', action.error);
      //  break;
      case LOAD_FEATURED_EVENTS_SUCCESS:
        return state
        .set('loadingFeatured', false)
        .set('errorFeature', false)
        .set('feturedEvents', action.featuredEvents);

      default: return state;
    }
  });

export default myPageReducer;
