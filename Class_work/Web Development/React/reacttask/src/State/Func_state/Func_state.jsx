
/*

React components has a built-in state object.

The state object is where you store property values that belong to the component.

When the state object changes, the component re-renders.

The React useState Hook allows us to track state in a function component.
Import useState
We initialize our state by calling useState in our function component.
useState accepts an initial state and returns two values:

The current state.
A function that updates the state.

var [name,setName]=usestate("Rajesh nagar");
{name}


var [mydata,setMydata]=usestate({
        id:"1",
        name:"Rajesh nagar",
        age:33,
        mobile:31548799
});

{mydata.name}



*/


import React, { useState } from 'react'
import Func_img from './Func_img';

function Func_state() {

    var [name, setName] = useState("Raj nagar");


    var [myobj, setMyobj] = useState({
        num: 1,
        name: "Krupali Yadav",
        age: 33,
        isImage:true
    });

    return (
        <div className='container mt-5'>
            <button onClick={() => setName("Akash Nagar")}>Change</button>
            <h1>Hi my name is : {name}</h1>

            <hr />
            <button onClick={() => setMyobj({...myobj,name:"shrishti Shakya",age:30})}>Change</button>
            <h1>Name is : {myobj.name} and my age is {myobj.age} </h1>

            <hr />

            <button onClick={()=>setMyobj({...myobj,num:myobj.num+1})}>+</button>
            <h1>{myobj.num}</h1>
            <button onClick={()=>setMyobj({...myobj,num:myobj.num-1})}>-</button>

            <hr />
            <button onClick={()=>setMyobj({...myobj,isImage:false})}>Hide</button>
            <button onClick={()=>setMyobj({...myobj,isImage:true})}>Show</button>
            <button onClick={()=>setMyobj({...myobj,isImage:!myobj.isImage})}>Hide/Show</button>
            {
                myobj.isImage ? <Func_img/> : null
            }

            <br /><br /><br /><br /><br />
        </div>
    )
}

export default Func_state