// types.ts

// Importa los tipos necesarios de Redux
import { CombinedState } from 'redux';

// Importa tus tipos de reducers
import { booleanState } from './reducers';

// Define el tipo RootState que representa el estado global de tu aplicación
export interface RootState {
  styles: booleanState;
  // Agrega otros tipos de estado según sea necesario
}

// Utiliza CombinedState para representar el estado global combinado de todos los reducers
export type CombinedRootState = CombinedState<RootState>;
