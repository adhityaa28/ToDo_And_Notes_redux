import { createSlice } from "@reduxjs/toolkit";
import { actions } from "./todoReducer";
const initialState={
    message:""
}

const notificationSlice=createSlice({
    name:"notification",
    initialState,
    reducers:{
        remove:(state,action)=>{
            state.message="";
        }
    },
    // extraReducers:{
    //     "todo/add":(state,action)=>{
    //         state.message="Todo is created"
    //     }
    // }
    // extraReducers:(builder)=>{
    //     builder.addCase(actions.add,(state,action)=>{
    //         state.message="To do created";
    //     })
    // }
    extraReducers:{
        [actions.add]:(state,action)=>{
                    state.message="To do created";
                }
    }
})


export const notificationReducer = notificationSlice.reducer;
export const resetNotification = notificationSlice.actions.remove;
export const notificationSelector = (state)=>state.notificationReducer.message;