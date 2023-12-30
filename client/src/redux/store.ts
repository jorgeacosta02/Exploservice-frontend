import { createStore, combineReducers } from 'redux';
import stylesReducer from './reducers';

const rootReducer = combineReducers({
  styles: stylesReducer,
  // Agrega otros reducers según sea necesario
});

export const store = createStore(rootReducer);


