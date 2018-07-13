import { GET_APPS } from '../actions/types';
import isEmpty from 'lodash/isEmpty';

const initialState = {
  apps: []
};

export default (state = initialState, action = {}) => {
  switch(action.type) {
    case GET_APPS:
      return {
        apps:   action.apps.data[0]
      };
    default: return state;
  }
}