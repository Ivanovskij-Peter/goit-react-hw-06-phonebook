import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reduser from './redusers';

const rootReduser = combineReducers({
  contacts: reduser,
});

const store = createStore(rootReduser, composeWithDevTools());
export default store;
