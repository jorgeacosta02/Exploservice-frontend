import { 
    TOGGLE_STYLE,
    ToggleStyleAction
} from './actions';


// Reducer Interfaces
export interface RootState {
    styles: boolean;
}

export interface booleanState {
    state: boolean
}


// Reducers
export const stylesReducer = (state: booleanState, action: ToggleStyleAction): boolean => {
  switch (action.type) {
    case TOGGLE_STYLE:
      return !state;
    // default:
    //   return state;
  }
};


import { ActionWithPayload } from './actions'

export interface ESState {
    services: []
}

const initialState = {
    services: []
}


const esReducer = (state: any = initialState, action: ActionWithPayload<string,any>) => {
    switch (action.type){
        case 'GET_ALL_SERVICES':
            return{
                state,
                services: action.payload
            }
        default:
            return state
    }
}

export default esReducer

