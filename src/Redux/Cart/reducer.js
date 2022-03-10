import { CART_PRODUCT, DELETE_PRODUCT } from "./actionTypes";

const init = {
  cartdata: [],
};
export const cartReducer = (state = init, { type, payload }) => {
  switch (type) {
    case CART_PRODUCT:
      return {
        cartdata: [...state.cartdata, payload],
      };
      case DELETE_PRODUCT:
          let realdata = []
          for (let i =0; i < state.cartdata.length; i++){
              console.log(state.cartdata[i], payload);
              if(state.cartdata[i].id !== payload ){
                  realdata.push(state.cartdata[i]);
              }
          }
          return {
              cartdata : realdata
          }
    default:
      return state;
  }
};
