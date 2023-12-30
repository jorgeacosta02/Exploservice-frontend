import { createStore, combineReducers } from 'redux';
import {
  stylesReducer,
  esReducer
} from './reducers';

const rootReducer = combineReducers({
  styles: stylesReducer,
  esReducer
  // Agrega otros reducers según sea necesario
});

export const store = createStore(rootReducer);


