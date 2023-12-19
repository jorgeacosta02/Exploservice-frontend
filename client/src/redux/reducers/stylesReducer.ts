// src/store/reducers/stylesReducer.ts

import { TOGGLE_STYLE, ToggleStyleAction } from '../types';

const initialState: boolean = false;

const stylesReducer = (state = initialState, action: ToggleStyleAction): boolean => {
  switch (action.type) {
    case TOGGLE_STYLE:
      return !state;
    default:
      return state;
  }
};

export default stylesReducer;


  