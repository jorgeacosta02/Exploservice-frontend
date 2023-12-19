import { createStore, combineReducers } from 'redux';
import stylesReducer from './reducers/stylesReducer';

const rootReducer = combineReducers({
  counter: stylesReducer,
  // Agrega otros reducers según sea necesario
});

const store = createStore(rootReducer);

export default store;
