import { GET_APPS } from '../actions/types';
import isEmpty from 'lodash/isEmpty';

const initialState = {
  isLoaded: false,
  apps: {}
};

export default (state = initialState, action = {}) => {
  switch(action.type) {
    case GET_APPS:
      return {
        isLoaded:   action.isLoaded,
        apps:   action.apps
      };
    default: return state;
  }
}