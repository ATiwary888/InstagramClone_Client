import {combineReducers} from  'redux';

import posts from './posts';
import xyz from './auth';

export default combineReducers({
    posts,xyz
});