import { ActionWithPayload } from "../actions/actionTypes"

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