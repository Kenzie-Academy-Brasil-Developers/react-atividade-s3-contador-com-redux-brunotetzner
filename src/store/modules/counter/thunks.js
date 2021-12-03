import { changeNumber } from "./actions";

export const removeNumberThunk = (number) => {
  return (dispatch) => {
    const newNumber = { number: number - 1 };
    dispatch(changeNumber(newNumber));
  };
};

export const addNumberThunk = (number) => {
  return (dispatch) => {
    const newNumber = { number: number + 1 };

    dispatch(changeNumber(newNumber));
  };
};
