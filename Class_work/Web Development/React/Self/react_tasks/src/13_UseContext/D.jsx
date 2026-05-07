import React, { useContext } from "react";
import { UserData } from "./Use_Context";

function D() {
  const { name, setName } = useContext(UserData);

  return (
    <div>
      <button onClick={() => setName("Rajesh Rana")}>Change Name</button>
      <h1>This is D Component : {name}</h1>
    </div>
  );
}

export default D;
