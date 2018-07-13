import { combineReducers } from 'redux';

import apps       from './reducers/apps';
import dash       from './reducers/dash';
import reviews    from './reducers/reviews';

export default combineReducers({
  apps,
  dash,
  reviews
});