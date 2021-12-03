import { ADD_NUMBER } from "./actionTypes";

const initialState = { number: 0 };
const reduceCounter = (state = initialState, action) => {
  switch (action.type) {
    case ADD_NUMBER: {
      return action.newNumber;
    }

    default:
      return state;
  }
};
export default reduceCounter;
