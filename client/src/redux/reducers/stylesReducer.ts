
const stylesReducer = (state = false, action: any) => {
  switch (action.type) {
    case 'TOGGLE_STYLE':
      return !state; // Cambiar entre true y false al hacer clic
    default:
      return state;
  }
};

export default stylesReducer;

  