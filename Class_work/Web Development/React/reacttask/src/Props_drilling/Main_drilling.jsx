/*

What is Prop Drilling?
Anyone who has worked in React would have faced this and if not then will face it definitely. 
Prop drilling is basically a situation when the same data is being sent at almost every level due to 
requirements in the final level. 

Here is a diagram to demonstrate it better. 
Data needed to be sent from Parent(A) to Child(E) . 

YOU PASS STATE A TO D
PROBLEM IS NOT REQUIREMENT IN B,C SO ITS SLOW PROCEES

==============================================================


SO now sollution useContext(),createContext() hooks introduced

*/



import React, { useState } from 'react'
import A from './A'

function Main_drilling() {

    const [number, setNumber] = useState(1);
    const [name, setName] = useState("Patel Raj");
       
    return (
        <div className='container mt-5'>

            <h1>{name}</h1>
            <button onClick={() => setName("Nagar Raj")}>Change Main</button>
            <hr />

            <button onClick={() => setNumber(number + 1)}>+</button>
            <h1>{number}</h1>
            <button onClick={() => setNumber(number + 1)}>-</button>
            <hr />
            <A name={name} number={number} setName={setName}/>

        </div>
    )
}

export default Main_drilling