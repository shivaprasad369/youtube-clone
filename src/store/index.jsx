import { configureStore, createSlice } from "@reduxjs/toolkit";

const text=createSlice({
    name:'search',
    initialState:{
        text:"btth"
    },
    reducers:{
        setText:(state,action)=>{
            state.text=action.payload;
        }
    }
})
const store=configureStore({
    reducer:{text:text.reducer}
})
export default store;
export const {setText}=text.actions;