import { 
    TOGGLE_STYLE,
    ToggleStyleAction,
    FALSE_STYLE,
    FalseStyleAction,
} from './actions';


// Reducer Interfaces
export interface booleanState {
    styles: boolean
}


// Estado inicial
const initialState: booleanState = {
    styles: false, // O el valor inicial que desees
};


// Reducers
export const stylesReducer = (state: booleanState = initialState, action: any): booleanState => {
  switch (action.type) {
    case TOGGLE_STYLE:
        return { ...state, styles: !state.styles };
    case FALSE_STYLE:
        return { ...state, styles: false};
    default:
        return state;
  }
};

