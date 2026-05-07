import React from "react";
import { useState } from "react";

function Cart() {
  var [myobj, setMyobj] = useState({
    num: 1,
  });

  const plus = () => {
    setMyobj({ ...myobj, num: myobj.num + 1 });
  };
  const minus = () => {
    setMyobj({ ...myobj, num: myobj.num - 1 });
  };

  return (
    <div className="d-flex justify-content-center align-items-center mt-5">
      <div className="d-flex flex-column align-items-center">
        <button onClick={() => plus()}>+</button>
        <h1>{myobj.num}</h1>
        <button onClick={() => minus()}>-</button>
      </div>
    </div>
  );
}

export default Cart;
