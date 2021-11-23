import React from "react";
import { Container } from "./style.js";
import { useDispatch, useSelector } from "react-redux";
import { addNumber, removeNumber } from "../../store/modules/counter/actions";
import { useState } from "react";
const Counter = () => {
  const [value, setValue] = useState(0);
  const dispatch = useDispatch();
  const numberValue = useSelector((state) => state.number);
  const clickAdd = () => {
    setValue(value + 1);
    dispatch(addNumber(value));
  };
  const clickRemove = () => {
    setValue(value - 1);
    dispatch(removeNumber(value));
  };

  return (
    <Container>
      <button onClick={clickAdd}>+</button>
      <p>{numberValue.number}</p>
      <button onClick={clickRemove}>-</button>
    </Container>
  );
};
export default Counter;
