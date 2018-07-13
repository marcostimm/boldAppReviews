import { combineReducers } from 'redux';

import apps       from './reducers/apps';
import dash       from './reducers/dash';

export default combineReducers({
  apps,
  dash
});