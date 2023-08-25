import React from 'react'

import Coininfo from "../component/Coininfo"
import Currency from './Currency'
import { pagechange } from '../redux/Slice/basicdataSlice';
import { useDispatch } from 'react-redux'
import { useEffect } from "react";
import News from './News';



export default function Home() {


const dispatch=useDispatch()
  

useEffect(()=>{

  dispatch(pagechange("Home"));

  },[])


  return (
    <div className='md:px-9 px-2 '> 
      <Coininfo/>
      <Currency/>
      <News/>
    </div>
  )
}
