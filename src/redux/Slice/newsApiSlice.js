import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


const url = 'https://bing-news-search1.p.rapidapi.com/news?safeSearch=Off&textFormat=Raw';
const options = {
	method: 'GET',
	headers: {
		'X-BingApis-SDK': 'true',
		'X-RapidAPI-Key': '25ce53a80emshe4a9cf0171ecea1p1abdddjsn85702c0f6710',
		'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com'
	}
};
export const newsfetchdata=createAsyncThunk("newsfetchdata",async()=>{
   return fetch(url,options).then((res)=>
    res.json())
})

export const catSearchdata=createAsyncThunk("catSearchdata",async(aa)=>{
   
    return fetch(`https://bing-news-search1.p.rapidapi.com/news/search?q=${aa}&freshness=Day&textFormat=Raw&safeSearch=Off`,options).then((res)=>
    res.json())
})

const newsfetchdataSlice=createSlice({
    name:"newsfetchdata",
    initialState:{
        isLoading:false,
        newsdata:[],
        isError:false,
        searchcat:""
    },
    extraReducers:{
        [newsfetchdata.pending]:(state)=>{
            state.isLoading=true
        },
        [newsfetchdata.fulfilled]:(state,action)=>{
            state.isLoading=false
            state.newsdata=action.payload.value
        },
        [newsfetchdata.rejected]:(state,action)=>{
            console.log("error",action.payload);
            state.isError=true;
          
        },
        [catSearchdata.pending]:(state)=>{
            state.isLoading=true
        },
        [catSearchdata.fulfilled]:(state,action)=>{
            state.isLoading=false
            state.newsdata=action.payload.value
        },
        [catSearchdata.rejected]:(state,action)=>{
            console.log("error",action.payload);
            state.isError=true;
          
        }
    }

})
export default newsfetchdataSlice.reducer;