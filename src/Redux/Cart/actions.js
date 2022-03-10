import {CART_PRODUCT } from "./actionTypes";
import { DELETE_PRODUCT } from "./actionTypes";
import { ADD_PRICE } from "./actionTypes";
export const cartproduct = (data) => {
  return {
    type: CART_PRODUCT,
    payload:data
  };
};
export const deleteproduct = (id) => {
  return {
    type: DELETE_PRODUCT,
    payload: id,
  };
};
