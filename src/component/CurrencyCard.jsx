import React, { useState } from 'react'
import millify from "millify";

import { NavLink } from 'react-router-dom'

export default function CurrencyCard(props) {
    const coind=props.coind;
 

  return (
    <NavLink  to={`/currencydetails/${coind.uuid}`} key={coind.uuid} className='flex md:p-3 px-1 rounded-md justify-center flex-col border h-[180px] w-[230px]'>
        <div className='flex justify-between'>
            
            <p>{millify(coind.rank)}<span>. {coind.name}</span></p>        
            <img className='h-[30px]' src={coind.iconUrl} alt="" />
        </div>
        <div className='flex flex-col gap-4' >
        <p>Price: <span>{millify(coind.price)}</span></p>
        <p>Market Cap: <span>{millify(coind.marketCap)}</span></p>
        <p>Daily Chaneg: <span>{millify(coind.change)}</span></p>

        </div>
    </NavLink>
  )
}
