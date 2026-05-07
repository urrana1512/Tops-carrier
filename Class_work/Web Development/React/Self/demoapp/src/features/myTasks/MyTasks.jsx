import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { change, hide, minus, plus, show, toggle } from "./taskSlice";
import Image from "./Image";

function MyTasks() {
  // get all state from store (taskSlice)
  const { number, name, isImage } = useSelector((state) => state.task);

  // we can call any slice action by this
  const dispatch = useDispatch();

  return (
    <div>
      <button onClick={() => dispatch(change())}>Change</button>
      <h1>{name}</h1>

      <hr />

      <button onClick={() => dispatch(plus())}>+</button>
      <h1>{number}</h1>
      <button onClick={() => dispatch(minus())}>-</button>

      <hr />
      <button onClick={() => dispatch(hide())}>Hide</button>
      <button onClick={() => dispatch(show())}>Show</button>
      <button onClick={() => dispatch(toggle())}>Hide/Show</button>

      {isImage ? <Image /> : null}
    </div>
  );
}

export default MyTasks;
