import * as actionTypes from './actionTypes';

export const fetchUserActions = (login) => { 
  return {
    type: actionTypes.FETCH_USER,
    payload: login
  }
};

export const fetchUserFulfilled = (user) => { 
  return {
    type: 'FETCH_USER_FULFILLED',
    payload: user
  }
};

export const show = (user) => { 
  return {
    type: 'SHOW'
  }
};

export function clear() {
  return {
    type: 'CLEAR_USERS'
  }
}