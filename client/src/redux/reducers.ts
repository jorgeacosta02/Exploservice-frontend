import { 
    TOGGLE_STYLE,
    ToggleStyleAction,
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
export const stylesReducer = (state: booleanState = initialState, action: ToggleStyleAction): booleanState => {
  switch (action.type) {
    case TOGGLE_STYLE:
        return { ...state, styles: !state.styles };
    default:
        return state;
  }
};

