import { combineReducers } from 'redux';
import starWarsReducer from './modules/star-wars-reducer';
import loginReducer from './modules/login-reducer';

const rootReducer = combineReducers({
  starWars: starWarsReducer,
  login: loginReducer,
});

export default rootReducer;