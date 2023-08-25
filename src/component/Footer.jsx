import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Footer() {
  return (
    <div className='w-full flex py-2 flex-col text-white bg-cyan-900 justify-center items-center'>
        <p>CRYPTOSAL</p>
        <p>All Rights Reserverd</p>
        <div className='flex gap-2 text-cyan-500'>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/exchange">Exchange</NavLink>
        <NavLink to="/news">News</NavLink>

            </div>
    </div>
  )
}
