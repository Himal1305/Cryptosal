import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from "react";
import { fetchdata } from '../redux/Slice/ApidataSlice';
import millify from 'millify';
import { pagechange } from '../redux/Slice/basicdataSlice';

export default function Exchange() {
  const {data}=useSelector((state)=>state.Apidata)
  const dispatch=useDispatch()
 const [open,setopen]=useState()
 
 
 useEffect(()=>{
  if(data.coins==undefined){
    dispatch(fetchdata());
    dispatch(pagechange("Crypto Exchange"))
  }

  },[])

 function openhandlar(ev){
  if(open==ev.target.value){
    setopen("")
  }
  else{
  setopen(ev.target.value);
 }
}
  return (
    (data.coins==undefined)?(<div>Loading</div>):(
    <div className='px-4 py-4 w-full flex flex-col select-none'>
    <div className='w-full px-2 flex'>
  
    <p className='text-left w-1/4 font-semibold'>Exchanges</p>
    <p className='text-center w-1/4 font-semibold'>24h Trade Volume</p>
    <p className='text-center w-1/4 font-semibold' >Markets</p>
    <p className='text-center w-1/4 font-semibold'>Changes</p>
      </div>
  {data.coins.map(D=><div key={D.uuid} className='flex flex-col my-1'>
    <div className='border flex hover:bg-slate-200 w-full text-xs sm:text-base relative  bg-slate-50' key={D.uuid}>
      <p className='px-0 md:px-2 text-left w-1/4 border overflow-x-hidden'>{D.rank}. {D.name}</p>
      <p className='px-0 md:px-2 text-left w-1/4 border overflow-x-hidden'>$ {D.price}</p>
      <p className='px-0 md:px-2 text-center w-1/4 border overflow-x-hidden'>{millify(D.marketCap)}</p>
      <p className={(D.change < 0)?('px-0 md:px-2 w-1/4 border font-semibold overflow-x-hidden text-center text-red-700'):('px-2 w-1/4 overflow-x-hidden text-center font-semibold text-blue-600 border')}>{millify(D.change)}%</p>
      <button className=' select-none z-20 px-2 text-sm bg-slate-200' value={D.uuid} onClick={openhandlar}>V</button>
    </div>
    <div className={(open != D.uuid)?('border hidden px-2 '):('border bg-slate-100 hover:bg-slate-200  p-3 ')}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo aspernatur odio necessitatibus dolor natus aperiam minus cupiditate asperiores optio mollitia, sed veniam rerum reprehenderit praesentium perspiciatis error facilis, ipsum magnam.</div>
  </div>
) 
  }
  </div> 
))
}