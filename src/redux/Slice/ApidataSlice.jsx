import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
const options = {
	method: 'GET',
headers: {
    'X-RapidAPI-Key': '25ce53a80emshe4a9cf0171ecea1p1abdddjsn85702c0f6710',
    'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
}}
const url=`https://coinranking1.p.rapidapi.com/coins?referenceCurrencyUuid=yhjMzLPhuIDl&timePeriod=24h&tiers%5B0%5D=1&orderBy=marketCap&orderDirection=desc&limit=100&offset=0`
export const fetchdata=createAsyncThunk("fetchdata",async()=>{
    return fetch(url,options).then((res)=>
    res.json())
})
export const Searchdata=createAsyncThunk("Searchdata",async(search)=>{
    return fetch(`https://coinranking1.p.rapidapi.com/search-suggestions?referenceCurrencyUuid=yhjMzLPhuIDl&query=${search}`,options).then((res)=>
    res.json())
})



const ApidataSlice=createSlice({
    name:"Apidata",
    initialState:{
        isLoading:false,
        data:[],
        isError:false,
        seachdata:[]
    },
    extraReducers:{
        [fetchdata.pending]:(state)=>{
            state.isLoading=true
        },
        [fetchdata.fulfilled]:(state,action)=>{
            state.isLoading=false
            state.data=action.payload.data
            
        },
        [fetchdata.rejected]:(state,action)=>{
            console.log("error",action.payload);
            state.isError=true;
          
        },



        [Searchdata.pending]:(state)=>{
            
            state.isLoading=true
        },
        [Searchdata.fulfilled]:(state,action)=>{
            state.isLoading=false
            state.seachdata=action.payload.data
            
        },
        [Searchdata.rejected]:(state,action)=>{
            console.log("error",action.payload);
            state.isError=true;
          
        }
    }

})
export default ApidataSlice.reducer;