import { combineReducers } from 'redux';
import userReducer from './userReducer';
import patientReducer from './patientReducer';

const rootReducer = combineReducers({
  user: userReducer,
  patients: patientReducer,

});


export default rootReducer;
