import {combineReducers} from 'redux';

import tasks from './alltasks';

import taskview from './taskview';

export default root=combineReducers({tasks,taskview})