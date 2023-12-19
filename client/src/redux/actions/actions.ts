
import { TOGGLE_STYLE, ToggleStyleAction } from '../types';

export const toggleStyle = (): ToggleStyleAction => {
  return {
    type: TOGGLE_STYLE,
  };
};


