import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import CurrencyCard from './CurrencyCard';
import { NavLink } from 'react-router-dom';
import { Searchdata, fetchdata } from '../redux/Slice/ApidataSlice';
import { pagechange } from '../redux/Slice/basicdataSlice';
import FadeLoader from "react-spinners/FadeLoader";
import Search from './Search';
import {FaSearch } from "react-icons/fa"

export default function Currency() {
const dispatch=useDispatch()

const {seachdata,data,isLoading}=useSelector((state)=>state.Apidata)
const {page}=useSelector((state)=>state.basicdata)
const[searchinput,setsearchinput]=useState("")

const[search,setsearch]=useState(false)


useEffect(()=>{
  window.scrollTo(0, 0)
  dispatch(pagechange("Crypto Crrriency"))
  setsearch(false)
  if(data.coins==undefined){
    dispatch(fetchdata())
  }
},[])

function searchhandlar(){
  setsearch(true)
  dispatch(Searchdata(searchinput))
}
return (
  isLoading?(<div className='w-[100%] h-[100%] flex justify-center items-center' ><FadeLoader color="#36d7b7" /> </div> ):(
    <>
    {(page=="Home")?(
    <div className='flex justify-between py-3 '>
     <h1 className='text-4xl font-semibold'>Top 10 CryptoCurrency In the World</h1>
      <NavLink to="/currency"  className='text-2xl text-blue-500 font-semibold'>See More</NavLink>
        </div>):
        (<div className='flex relative justify-center items-center '>
          <input placeholder='Enter Bit-Coin relative' className='border-2 rounded-xl w-2/4 relative text-2xl px-2 outline-none py-1' onChange={(ev)=>setsearchinput(ev.target.value)} value={searchinput}  type="text" />
          <FaSearch className='text-3xl px-1 drop-shadow-lg cursor-pointer   right-0' onClick={searchhandlar} />
          </div>
        )
    }
    <div className='flex flex-wrap justify-around md:gap-4 gap-1 p-1 md:p-3 '>
    {
   data.coins ? 
   (
    (page=="Home")?(
        data.coins.slice(0, 10).map(coind => <CurrencyCard key={coind.uuid} coind={coind} />)
    ):

    ((search)?(seachdata.coins)?(

    (<div className='w-full px-4 flex flex-col'> 
    <div className='w-full flex justify-between items-center px-5 '>
    <p>Results: {searchinput}</p>
    <NavLink  to="/" className='bg-slate-100 rounded-sm  border px-1 hover:drop-shadow-lg'>
      Home
    </NavLink>
    
    </div>
    <div className='flex w-full font-semibold py-3'>
      <p className='px-0 md:px-2 text-left w-1/4  overflow-x-hidden'>Name</p>
      <div className='px-0 md:px-2  text-left w-1/4 flex justify-center items-center  overflow-x-hidden '> Image
      </div>
      <p className='px-0 md:px-2 text-center w-1/4  overflow-x-hidden'>Symbol</p>
      <p className='px-0 md:px-2 text-center w-1/4  overflow-x-hidden'>Price</p>
    </div>
    
    <div className='flex flex-col w-full'>
    {
      seachdata.coins.map( SD=> <Search SD={SD} />)
    }

    </div>

    </div>)):(<>nodata found</>):
    
    
    ((data.coins)?(data.coins.map(coind => <CurrencyCard key={coind.uuid} coind={coind} />) ):(<>no data</>)) 
    )
    
   ):

   (<>Data not Found </>)
    }
    </div>
</>
))}
