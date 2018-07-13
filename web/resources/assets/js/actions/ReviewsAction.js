import axios from 'axios';
import jwtDecode from 'jwt-decode';
import { GET_REVIEWS } from './types';

export function getReviews(reviews) {
  return {
    type: GET_REVIEWS,
    reviews
  };
}

export function listReviews(slug, order) {
  return dispatch => {
    return axios.get('/api/reviews?app=' + slug + '&order=' + order.order + '&dir=' + order.dir).then(res => {
      dispatch(getReviews(res.data, true));
    });
  }
}