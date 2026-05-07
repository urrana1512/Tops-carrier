import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { plus,minus } from './cartSlice';

function Mytask() {

    const { name, number, isImage } = useSelector((state) => state.cart);
    const dispatch = useDispatch();
    return (
        <div className='container mt-5'>
            <button onClick={()=>{dispatch(plus())}}>+</button>
            <h1>{number}</h1>
            <button onClick={()=>{dispatch(minus())}}>-</button>
        </div>
    )
}

export default Mytask