/*
 *
 * MyPage actions
 *
 */

import {
         LOAD_EVENTS, 
         LOAD_EVENTS_SUCCESS, 
         LOAD_EVENTS_ERROR,
         LOAD_FEATURED_EVENTS,   
         LOAD_FEATURED_EVENTS_SUCCESS,
         LOAD_FEATURED_EVENTS_ERROR
        } from './constants';


 export function loadEvents(tennantId, skip, take, searchTerm) {
   console.log('loadEvents: ' + tennantId);
  return {
    type: LOAD_EVENTS,
    tennantId,
    skip,
    take,
    searchTerm
  };
 }
        
export function loadEventsSuccess(events) {
  return {
     type: LOAD_EVENTS_SUCCESS,
     events
  };
 }
        
  export function loadEventsError(error) {
    return {
     type: LOAD_EVENTS_ERROR,
     error      
   };
  }        

export function loadFeaturedEvents(tennantId, skip, take) {
  console.log('loadFeaturedEvents: ' + tennantId);
  return {
    type: LOAD_FEATURED_EVENTS,
    tennantId,
    skip,
    take,
  };
}

export function loadFeaturedEventsSuccess(featuredEvents) {
  return {
    type: LOAD_FEATURED_EVENTS_SUCCESS,
    featuredEvents
  };
}

export function loadFeaturedEventsError(featuredError) {
  return {
    type: LOAD_FEATURED_EVENTS_ERROR,
    featuredError
  };
}

