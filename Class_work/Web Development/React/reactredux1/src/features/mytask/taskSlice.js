import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  number: 0,
  name:"Raj nagar",
  isImage:true
}

export const taskSlice=createSlice({
    name:'taskSlice',
    initialState,
    reducers:{

        plus:(state)=>{
            return({...state,number:state.number+1});
        },
        minus:(state)=>{
            return({...state,number:state.number-1});
        },
        change:(state)=>{
            return({...state,name:"Akash Nagar"});
        },
        hide:(state)=>{
            return({...state,isImage:false});
        },
        show:(state)=>{
            return({...state,isImage:true});
        },
        toggle:(state)=>{
            return({...state,isImage:!state.isImage});
        }
    }
})


export const { plus, minus, change,hide,show,toggle } = taskSlice.actions
export default taskSlice.reducer