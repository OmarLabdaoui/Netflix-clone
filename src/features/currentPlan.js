import { createSlice } from "@reduxjs/toolkit";

const initialState={
    curentplan:null
}
const planSlice=createSlice({
    name:"plan",
    initialState,
    reducers:{
        planinitial:(state,action)=>{
            state.curentplan=action.payload
        },
        

    }
})
export const {planinitial}= planSlice.actions
export default  planSlice.reducer;

export const selectPlan = (state)=>state.plan.curentplan