import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "./testReducer";

export default function Sandbox() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.test.data);

  return (
    <>
      <h1>Testing 123</h1>
      <h3>The data is: {data}</h3>
      <button
        className="btn btn-success"
        contents="Increment"
        onClick={() => dispatch(increment(20))}
      >
        Increment
      </button>{" "}
      <button
        className="btn btn-danger"
        contents="Increment"
        onClick={() => dispatch(decrement(10))}
      >
        Decrement
      </button>
    </>
  );
}
