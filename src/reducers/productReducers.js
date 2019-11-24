export const productReducers = (state, action) => {
  switch (action.type) {
    case "APPLY_FILTER":
      return state.filter(item => {return item.id === action.id || item.name === action.name})
    default:
      return state;
  }
};
