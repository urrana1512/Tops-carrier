




import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


export const select_user=createAsyncThunk('select_user',async()=>{
    const res=await axios.get(`http://localhost:3000/user`);
    console.log(res.data);
    return res.data;
});

export const insert_user=createAsyncThunk('insert_user',async(api,formobj)=>{
    const res=await axios.post(`http://localhost:3000/user`,formobj);
    console.log(res.data);
    return res.data;
});

export const delete_user=createAsyncThunk('delete_user',async(id)=>{
    const res=await axios.delete(`http://localhost:3000/user/${id}`);
    console.log(res.data);
    return res.data;
});

export const update_user=createAsyncThunk('update_user',async(formobj)=>{
    const res=await axios.patch(`http://localhost:3000/user/${formobj.id}`,formobj);
    console.log(res.data);
    return res.data;
});






const initialState={
       users_data:[]
    };

export const userSlice =createSlice({
    name:'user',
    initialState,
    reducers:{

    },
    extraReducers:{
        [select_user.fulfilled]:(state,action)=>{
            state.users_data=action.payload
        }
    }
});


export const {  } = userSlice.actions
export default userSlice.reducer