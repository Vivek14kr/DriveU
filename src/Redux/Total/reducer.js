import { REGISTER_TOTAL } from "./actionTypes";

const init = {
  totalno: 0,
};
export const TotalReducer = (state = init, { type, payload }) => {
  switch (type) {
    case REGISTER_TOTAL:
      return {
        totalno: payload,
      };
    default:
      return state;
  }
};
