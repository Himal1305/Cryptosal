import React, { useState } from 'react'
import { Line } from 'react-chartjs-2'
import { Chart, registerables } from 'chart.js'
import millify from 'millify'
Chart.register(...registerables)


export default function Charts(props) {
  const histry=props.histry.history
  const change=props.histry.change
  const price=props.price
  const charthandlare=props.charthandlare
const choiceCha=props.choiceCha
  
  let ts=[]
  let d=[];
  if(histry){
  for(let i = 0 ; i < histry.length ; i += 1 ){
      d.push(histry[i].price)
      ts.push(new Date(histry[i].timestamp *1000).toLocaleDateString())
  }}

  const state = {
    labels:ts.reverse(),
    datasets: [
      {
        label: 'Crypto Prices',
        backgroundColor: 'rgba(91, 226, 229, 0.4)',
        borderColor: 'rgba(0, 250, 255, 0.8)',
        borderWidth: 1,
        data:d.reverse(),
      },
    ],
  }



  return (
    <div className='w-full px-2 h-[300px] md:h-[500px]   '>
             <div className='w-full flex justify-between'>
          <select className='px-4'>
          <option selected="selected" disabled  value={choiceCha}>
              {choiceCha}</option>
              <option onClick={charthandlare}  value={choiceCha}>24h</option>
              <option onClick={charthandlare} value="7d">7d</option>
              <option onClick={charthandlare} value="30d">30d</option>
              <option onClick={charthandlare} value="1y">1y</option>
              <option onClick={charthandlare} value="3y">3y</option>
              
                  </select>
              <div className=' flex gap-4 '>
              <p className='font-normal text-sm'><span className={(change < 0)?(`font-semibold text-red-700 text-sm`):(`font-semibold text-blue-600 text-sm`)}>{change}%</span></p>
              <p className='font-semibold text-sm'>Current Price: <span className='font-bold text-sm'>{millify(price)}</span></p>
                </div>
                  </div>
         
         
         <Line
         className='w-full'
          data={state}
          options={{
            title: {
              display: true,
              text: 'Class Strength',
              fontSize: 20,
            },
            legend: {
              display: true,
              position: 'right',
            },
          }}
        />

    </div>
  )
}
