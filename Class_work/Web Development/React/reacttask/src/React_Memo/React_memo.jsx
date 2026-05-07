/*

The React useMemo Hook returns a memoized value.

The useMemo Hook only runs when one of its dependencies update.

Using memo will cause React to skip rendering a component if its props have not changed.

This can improve performance.


*/


import React, { useMemo } from 'react'
import { useState } from "react";
import Memo_img from './Memo_img';

function React_memo() {

  const [count, setCount] = useState(0);
  const [name, setName] = useState("Raj nagar");
  const [isImage, setisImage] = useState(true);

  const increment = () => {
    setCount(count + 1);
  };

  const expensiveCalculation = (num) => {
    alert('hello')
    return num;
  };
  //expensiveCalculation(count); //withaout useMEMO ALL TIME REDURING 
  useMemo(() => expensiveCalculation(count), [count])  // WITH useMemo only function call when depedanct count change  


  return (
    <div className='container mt-5'>
      Count: {count}
      <button onClick={increment}>+</button>

      <hr />
      <button className='btn btn-primary' onClick={() => setName("Akash Nagar")}>Changes</button>
      <h1>{name}</h1>

      <hr />

      <button onClick={() => setisImage(!isImage)}>Hide/show</button>
            <hr />

            {
                isImage ? <Memo_img /> : null
            }

    </div>
  )
}


export default React_memo


