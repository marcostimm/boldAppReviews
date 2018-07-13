import axios from 'axios';
import jwtDecode from 'jwt-decode';
import { GET_DASH } from './types';

export function getDash(stats, isLoaded) {
  return {
    type: GET_DASH,
    stats,
    isLoaded
  };
}

export function dashStats(data) {
  return dispatch => {
    return axios.get('/api/apps/stats').then(res => {
      dispatch(getDash(res.data, true));
    });
  }
}