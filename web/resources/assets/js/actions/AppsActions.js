import axios from 'axios';
import jwtDecode from 'jwt-decode';
import { GET_APPS } from './types';

export function getApps(apps) {
  return {
    type: GET_APPS,
    apps
  };
}

export function appsList(data) {
  return dispatch => {
    return axios.get('/api/apps').then(res => {
      dispatch(getApps(res.data, true));
    });
  }
}