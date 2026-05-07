import { configureStore } from "@reduxjs/toolkit";
import  userSlice  from "../features/userSlice";
import  contactSlice  from "../features/contactSlice";


export default configureStore({
    reducer:{
       user:userSlice,
       contact:contactSlice
    },   
})