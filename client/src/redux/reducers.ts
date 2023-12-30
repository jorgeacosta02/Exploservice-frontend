import { 
    TOGGLE_STYLE,
    ToggleStyleAction,
    ActionWithPayload
} from './actions';


// Reducer Interfaces
export interface booleanState {
    styles: boolean
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


export interface ESState {
    services: []
}

const initialState = {
    services: []
}


export const esReducer = (state: any = initialState, action: ActionWithPayload<string,any>) => {
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



