import { ADD_NUMBER } from "./actionTypes";
import { RM_NUMBER } from "./actionTypes";

const initialState = { number: 0 };
const reduceCounter = (state = initialState, action) => {
  switch (action.type) {
    case ADD_NUMBER: {
      const { number } = action;
      return { number };
    }
    case RM_NUMBER: {
      const { number } = action;
      return { number };
    }

    default:
      return state;
  }
};
export default reduceCounter;
