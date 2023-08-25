import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Search(props) {
  const SD=props.SD
  return (
      
    <NavLink to={`/currencydetails/${SD.uuid}`} key={SD.uuid} className='flex w-full hover:bg-slate-100 my-1 ' >
      <p className='px-0 md:px-2 text-left w-1/4 border overflow-x-hidden font-semibold '> {SD.name}</p>
      <div className='px-0 md:px-2  text-left w-1/4 flex justify-center  items-center border overflow-x-hidden '>
      <img className=' h-[40px] w-[40px]' src={SD.iconUrl} alt="" />
      </div>
      <p className='px-0 md:px-2 text-center w-1/4 border overflow-x-hidden'>{SD.symbol}</p>
      <p className='px-0 md:px-2 text-center w-1/4 border overflow-x-hidden'>$ {SD.price}</p>
    </NavLink>
      
  )
}
