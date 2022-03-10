import {REGISTER_PRODUCT} from "./actionTypes";

export const Regproduct = (data) => {
  return {
    type: REGISTER_PRODUCT,
    payload : data
  };
};
