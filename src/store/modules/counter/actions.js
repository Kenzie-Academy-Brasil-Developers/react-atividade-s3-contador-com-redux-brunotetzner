import { ADD_NUMBER } from "./actionTypes";
import { RM_NUMBER } from "./actionTypes";

export const addNumber = (number) => {
  return { type: ADD_NUMBER, number };
};

export const removeNumber = (number) => {
  return { type: RM_NUMBER, number };
};
