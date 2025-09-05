import {createSlice} from "@reduxjs/toolkit";

const appSlice=createSlice({
    name:"app",
    initialState:{
        isMenuopen:true
    },
    reducers:{
        toggleMenu:(state)=>{
            state.isMenuopen=!state.isMenuopen
        },
        closeMEnu:(state)=>{
            state.isMenuopen=false
        }
    }
})

export const {toggleMenu,closeMEnu}=appSlice.actions;
export default appSlice.reducer;