import { createSlice } from "@reduxjs/toolkit";


const BasicdatSlice=createSlice({
    name:"basicdata",
    initialState:{
      page:"Home",
    },
  reducers:{
  pagechange:(state,action)=>{
        state.page=action.payload
        }
  }
    

})
export const{pagechange}=BasicdatSlice.actions;
export default BasicdatSlice.reducer;