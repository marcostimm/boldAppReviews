import { GET_REVIEWS } from '../actions/types';
import isEmpty from 'lodash/isEmpty';

const initialState = {
  reviews: []
};

export default (state = initialState, action = {}) => {
  switch(action.type) {
    case GET_REVIEWS:
      return {
        reviews:   action.reviews.data[0]
      };
    default: return state;
  }
}