import { createSlice } from "@reduxjs/toolkit";

 const initialState={
        name:"Akash nagar",
        number:0,
        isImage:true
    };

export const cartSlice =createSlice({
    name:'cart',
    initialState,
    reducers:{
        plus:(state)=>{
            return {...state,number:state.number+1}
        },
        minus:(state)=>{
            return {...state,number:state.number-1}
        }
    }
});

export const { plus,minus } = cartSlice.actions

export default cartSlice.reducer