import { REGISTER_PRODUCT } from "./actionTypes";

const init = {
  data: [],
};
export const registerReducer = (state = init, { type, payload }) => {
  switch (type) {
    case REGISTER_PRODUCT:
      return {
        
        data: payload,
      
      };
    default:
      return state;
  }
};
