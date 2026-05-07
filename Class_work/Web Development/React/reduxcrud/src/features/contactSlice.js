import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";



export const select_contact=createAsyncThunk('select_contact',async()=>{
    const res=await axios.get(`http://localhost:3000/contact`);
    console.log(res.data);
    return res.data;
});

export const insert_contact=createAsyncThunk('insert_contact',async(api,formobj)=>{
    const res=await axios.post(`http://localhost:3000/contact`,formobj);
    console.log(res.data);
    return res.data;
});

export const delete_contact=createAsyncThunk('delete_contact',async(id)=>{
    const res=await axios.delete(`http://localhost:3000/contact/${id}`);
    console.log(res.data);
    return res.data;
});

export const update_contact=createAsyncThunk('update_contact',async(id,formobj)=>{
    const res=await axios.patch(`http://localhost:3000/contact/${id}`,formobj);
    console.log(res.data);
    return res.data;
});

 const initialState={
       contacts_data:[]
    };

export const contactSlice =createSlice({
    name:'contact',
    initialState,
    reducers:{
    },
    extraReducers:{
        [select_contact.fulfilled]:(state,action)=>{
            state.contacts_data=action.payload;
        }
    }

});





export const {  } = contactSlice.actions
export default contactSlice.reducer