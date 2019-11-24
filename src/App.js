import React, { createContext, useReducer } from "react";
import Home from "./containers/Home";
import { productReducers } from "./reducers/productReducers";
import { productData } from "./reducers/productData";
import useCombinedReducers from "use-combined-reducers";

export const DispatchContext = createContext(null);

const App = () => {
  const [state, dispatch] = useCombinedReducers({
    product: useReducer(productReducers, productData)
  });
  const { product } = state;
  return (
    <DispatchContext.Provider value={dispatch}>
      <Home dispatch={DispatchContext} product={product} />
    </DispatchContext.Provider>
  );
};

export default App;
