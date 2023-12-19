// src/store/types.ts


// Reducers
export interface RootState {
    styles: boolean;
    // Otras propiedades del estado global según sea necesario
}



// Actions
export const TOGGLE_STYLE = 'TOGGLE_STYLE';
  
export interface ToggleStyleAction {
    type: typeof TOGGLE_STYLE;
}
  
  
  