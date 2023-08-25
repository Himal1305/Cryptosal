import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import Newscard from "./Newscard"
import { NavLink } from 'react-router-dom';
import { pagechange } from "../redux/Slice/basicdataSlice"
import { catSearchdata, newsfetchdata } from '../redux/Slice/newsApiSlice';
import { fetchdata } from '../redux/Slice/ApidataSlice';
import FadeLoader from "react-spinners/FadeLoader";

export default function News() {

  const dispatch=useDispatch()

  const {page}=useSelector((state)=>state.basicdata)
  const {newsdata,isLoading}=useSelector((state)=>state.newsfetchdata)
  const {data}=useSelector((state)=>state.Apidata)
  const [select,setselect]=useState("Categary")
  useEffect( () => {
    window.scrollTo(0, 0)
    dispatch(fetchdata())
    dispatch(newsfetchdata())
    dispatch(pagechange("Crypto News"));
  },[select])


  function catsearchhandlar(ev){
    setselect(ev.target.value)
    dispatch(catSearchdata(ev.target.value))
    
  }

  function falsehomehandlar() {
    dispatch(pagechange())
   }
  return( 
    isLoading ? (<div className='w-[100%] h-[100%] flex justify-center items-center' ><FadeLoader color="#36d7b7" /> </div> ):(
     <>
  {(page=="Home")?(
  <div className='flex justify-between py-3 '>
   <h1 className='text-4xl font-semibold'>Top Crypto News In the World</h1>
    <NavLink to="/news" onClick={falsehomehandlar} className='text-2xl text-blue-500 font-semibold'>See More</NavLink>
      </div>):
      (<div className='flex relative justify-start px-10 py-4 items-center '>
        <select className='sm:w-[130px] w-full text-center py-1 rounded-sm'  name="catagery">
        <option value={select} selected="selected">{select}</option>
        {/* <p>Resule: {catSearchdata}</p> */}
      {
        (data.coins)?(data.coins.map(M=> <option onClick={catsearchhandlar} key={M.name} value={M.name}>{M.name}</option>)) : (<option>No option Avalable</option>)
      }
    </select>
        </div>
      )
  }
  <div className='  flex flex-wrap justify-around md:gap-4 gap-1 p-1 md:p-3 '>
  {
  newsdata ? 
 (
  (page=="Home")?(
    
    newsdata.slice(0, 6).map(news => <Newscard key={news.name} news={news} />)
    
  ):(
    newsdata.map(news => <Newscard key={news.name} news={news} />)
  )
  
 ):

 (<>Data not Found </>)
  }
  </div>
</>
    ))
}
