import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


const options = {
	method: 'GET',
headers: {
    'X-RapidAPI-Key': '25ce53a80emshe4a9cf0171ecea1p1abdddjsn85702c0f6710',
    'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
}}

export const Cryptodetails=createAsyncThunk("Cryptodetails",async(deta)=>{
   
    return fetch(`https://coinranking1.p.rapidapi.com/coin/${deta.ID}?referenceCurrencyUuid=yhjMzLPhuIDl&timePeriod=${deta.TIME}`,options).then((res)=>
    res.json())
});

export const CryptoHistry=createAsyncThunk("CryptoHistry",async(deta)=>{
   
    return fetch(`https://coinranking1.p.rapidapi.com/coin/${deta.ID}/history?referenceCurrencyUuid=yhjMzLPhuIDl&timePeriod=${deta.TIME}`,options).then((res)=>
    res.json())
   
})




const CryptodetailsSlice=createSlice({
    name:"Cryptodetails",
    initialState:{
        isLoading:false,
        details:[],
        histry:[],
        isError:false,
    },
    extraReducers:{
        [Cryptodetails.pending]:(state)=>{
            state.isLoading=true
        },
        [Cryptodetails.fulfilled]:(state,action)=>{
            state.isLoading=false
            state.details=action.payload.data.coin
        },
        [Cryptodetails.rejected]:(state,action)=>{
            console.log("error",action.payload);
            state.isError=true;
          
        },
        [CryptoHistry.pending]:(state)=>{
            state.isLoading=true
        },
        [CryptoHistry.fulfilled]:(state,action)=>{
            state.isLoading=false
            state.histry=action.payload.data
           
        },
        [CryptoHistry.rejected]:(state,action)=>{
            console.log("error",action.payload);
            state.isError=true;
          
        },
    }
    
})
export default CryptodetailsSlice.reducer;