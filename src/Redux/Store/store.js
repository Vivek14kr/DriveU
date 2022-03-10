import { createStore, combineReducers } from "redux";
import { cartReducer } from "../Cart/reducer";



import { registerReducer } from "../Products/reducer";
import { TotalReducer } from "../Total/reducer";

const rootReducer = combineReducers({
  regState: registerReducer,
  cartState : cartReducer,
  totalState: TotalReducer
});

export const store = createStore(rootReducer)