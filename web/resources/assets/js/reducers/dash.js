import { GET_DASH } from '../actions/types';
import isEmpty from 'lodash/isEmpty';

const initialState = {
  isLoaded: false,
  stats: {}
};

export default (state = initialState, action = {}) => {
  switch(action.type) {
    case GET_DASH:
      return {
        isLoaded:   action.isLoaded,
        stats:      action.stats.data[0]
      };
    default: return state;
  }
}