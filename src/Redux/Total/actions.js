import { REGISTER_TOTAL } from "./actionTypes";

export const Regtotal = (data) => {
  return {
    type: REGISTER_TOTAL,
    payload: data,
  };
};
