import React from "react";
import { Container } from "./style.js";
import { useDispatch, useSelector } from "react-redux";
import {
  addNumberThunk,
  removeNumberThunk,
} from "../../store/modules/counter/thunks.js";
const Counter = () => {
  const dispatch = useDispatch();
  const { number } = useSelector((state) => state.number);

  const add = () => dispatch(addNumberThunk(number));
  const rm = () => dispatch(removeNumberThunk(number));

  return (
    <Container>
      <button onClick={add}>+</button>
      <p>{number}</p>
      <button onClick={rm}>-</button>
    </Container>
  );
};
export default Counter;
