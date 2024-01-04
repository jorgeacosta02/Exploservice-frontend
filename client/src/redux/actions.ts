// Action Types
export const TOGGLE_STYLE = 'TOGGLE_STYLE';
export const FALSE_STYLE = 'FALSE_STYLE';
export const GET_ALL_SERVICES = 'GET_ALL_SERVICES'; 



// Action interfaces
export interface ToggleStyleAction {
    type: typeof TOGGLE_STYLE;
}

export interface FalseStyleAction {
    type: typeof FALSE_STYLE;
}

export interface ActionWithPayload<T, P> {
  type: T,
  payload: P
}


// Actions
export const toggleStyle = (): ToggleStyleAction => {
  return {
    type: TOGGLE_STYLE,
  };
};

export const falseStyle = (): FalseStyleAction => {
  return {
    type: FALSE_STYLE,
  };
};


