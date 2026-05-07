
/*

The useReducer Hook is similar to the useState Hook.

It allows for custom state logic.

If you find yourself keeping track of multiple pieces of state that rely on complex logic, 
useReducer may be useful.


The useReducer Hook accepts three arguments.

useReducer(reducer, initialState, init)
The reducer function contains your custom state logic and the initialStatecan be a simple value, but generally will contain an object. The init argument is optional and is used to initialize the state.

The useReducer Hook returns the current stateand a dispatchmethod.

Here is an example where we use useReducer to keep track of the score of two players:
*/



import React, { useReducer } from 'react'
import Img from './Img';

function UseReducer() {

    const stateObject={
        name:"Akash nagar",
        number:0,
        isImage:true
    }

    const reducer_action=(state,action)=> {

        if(action.type==="CHANGE")
        {
            return({...state,name:"Nirav Nagar"});
        }
        if(action.type==="PLUS")
        {
            return({...state,number:state.number+1});
        }
        if(action.type==="MINUS")
        {
            return({...state,number:state.number-1});
        }
        if(action.type==="HIDE")
        {
            return({...state,isImage:false});
        }
        if(action.type==="SHOW")
        {
            return({...state,isImage:true});
        }
        if(action.type==="TOGGLE")
        {
            return({...state,isImage:!state.isImage});
        }

    }
    const [state, dispatch] = useReducer(reducer_action, stateObject);


    return (
        <div className='container mt-5'>
            <button onClick={() => { dispatch({ type: "CHANGE" }) }}>Change Name state</button>
            <h1>{state.name}</h1>

            <hr />

            <button onClick={() => { dispatch({ type: "PLUS" }) }}>+</button>
            <h1>{state.number}</h1>
            <button onClick={() => { dispatch({ type: "MINUS" }) }}>-</button>

            <hr />
            <button onClick={() => { dispatch({ type: "HIDE" }) }}>Hide</button>
            <button onClick={() => { dispatch({ type: "SHOW" }) }}>Show</button>
            <button onClick={() => { dispatch({ type: "TOGGLE" }) }}>Hide/Show</button><br />

            {state.isImage ? <Img /> : null}

        </div>
    )
}

export default UseReducer