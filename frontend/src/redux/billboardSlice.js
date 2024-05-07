import {createSlice} from "@reduxjs/toolkit";

const billboardSlice = createSlice({
    name:"Billboard",
    initialState:{
        province:null,
        data:null
      
    },
    reducers:{
        // multiple actions
        getProvince:(state,action)=>{
            state.province = action.payload;
        },
        getAllcities:(state,action)=>{
            state.data = action.payload;
        },


    }
});
export const {getProvince,getAllcities} = billboardSlice.actions;
export default billboardSlice.reducer;


