  import React, { useEffect, useState } from 'react'
import Charts from './Chart';
  import { useLocation } from 'react-router';
  import {CryptoHistry, Cryptodetails  } from '../redux/Slice/CryptodetailsSlice';
  import { useDispatch, useSelector } from 'react-redux';
  import {MdDone} from "react-icons/md"
  import {RxCross1} from "react-icons/rx"
  import millify from 'millify';
  import FadeLoader from "react-spinners/FadeLoader";
import { pagechange } from '../redux/Slice/basicdataSlice';
  


  export default function Currencydetails() {
      const location=useLocation()
      const dispatch=useDispatch()
      const {details,isLoading,histry}=useSelector((state)=>state.Cryptodetails)
      const [choice, setChoice] = useState("24h")
      const [choiceCha, setChoiceCha] = useState("24h");
    
      useEffect(()=>{
          dispatch(Cryptodetails({ID:((location.pathname.split("/")).at(-1)) ,TIME:choice}))
          dispatch(CryptoHistry({ID:((location.pathname.split("/")).at(-1)) ,TIME:choiceCha}))
          dispatch(pagechange("Crypto Crrriency"))
           },[])
       
        function timehandlare(ev) { 
          setChoice(ev.target.value)
          dispatch(Cryptodetails({ID:((location.pathname.split("/")).at(-1)) ,TIME:ev.target.value}))
          }
          function charthandlare(ev) { 
            setChoiceCha(ev.target.value);
            dispatch(CryptoHistry({ID:((location.pathname.split("/")).at(-1)) ,TIME:ev.target.value}))
            }


      return (
        isLoading?(<div className='w-[100%] h-[100%] flex justify-center items-center' ><FadeLoader color="#36d7b7" /> </div> 
        ):(
          (details)?(
          // main
          <div className='w-full px-5'>
          <div  className='w-full h-[150px] flex flex-col justify-center items-center'>
            <h1 className='text-4xl font-semibold'>{details.name} <span className=' text-gray-600'>{details.symbol} </span> Price</h1>
            <p className='text-sm font-semibold text-gray-700' >{details.symbol} Live  Price is  Us Doller, View Value Statisstics, Market Cap and Supply.</p>
          </div>
          
          
          <Charts histry={histry} price={details.price} charthandlare={charthandlare} choiceCha={choiceCha} />
          
          
          <div className='w-full'>
          <select className='px-5'>
          <option disabled selected="selected" value={choice}>
          {choice}
        </option>
            <option onClick={timehandlare}  value="24h">24h</option>
              <option onClick={timehandlare} value="7d">7d</option>
              <option onClick={timehandlare} value="30d">30d</option>
                  </select></div>
          
          
          <div className='w-full flex justify-around flex-wrap '>
          {/* Left container */}
          <div className='w-[320px] select-none flex- flex-col py-5'>
            <h3 className='text-2xl font-semibold'>{details.name} Value Statisstics</h3>
            <p className='text-sm text-gray-600' >an overview showing the  Static {details.symbol}</p>
            <div className=' py-4 ' >
              <div className='flex hover:bg-slate-100 px-1  justify-between py-1 border-y'>
                <p className='text-xl'>Price of  USD</p>
                <p className='font-semibold text-gray-600'>{(details.price)}</p>
              </div>
              
              <div className='flex hover:bg-slate-100 px-1  justify-between py-1 border-y'>
                <p>RANK</p>
                <p className='font-semibold text-gray-600'>{(details.rank)}</p>
              </div>
              <div className='flex hover:bg-slate-100 px-1  justify-between py-1 border-y'>
                <p>24h Volume</p>
                <p className='font-semibold text-gray-600'>{(details.btcPrice)}</p>
              </div>
              <div className='flex hover:bg-slate-100 px-1  justify-between py-1 border-y'>
                <p>Market Cap</p>
                <p className='font-semibold text-gray-600'>{(details.marketCap)}</p>
              </div>
              <div className='flex hover:bg-slate-100 px-1  justify-between py-1 border-y'>
                <p>All Time Hight</p>
                <p className='font-semibold text-gray-600'>{(details.fullyDilutedMarketCap)}</p>
              </div>
            </div>
          </div>

  {/* right  */}
  <div className='w-[320px] flex  flex-col select-none py-5'>
            <h3 className='text-2xl font-semibold'>Other Statisstics</h3>
            <p className='text-sm text-gray-600'>an overview showing the State of all crypto currency <span className='font-semibold'>{details.name}</span></p>
            <div className=''>
              <div className='flex hover:bg-slate-100 px-1  mt-2 justify-between py-1 border-y'>
                <p>Number Of Market</p>
                <p className='font-semibold text-gray-600'>{(details.numberOfMarkets)}</p>
              </div>
              
              <div className='flex hover:bg-slate-100 px-1  justify-between py-1 border-y'>
                <p>Number Of Exchange</p>
                <p className='font-semibold text-gray-600'>{(details.numberOfExchanges)}</p>
              </div>
              <div className='flex hover:bg-slate-100 px-1  justify-between py-1 border-y'>
                <p>Approved Supply</p>
                <p className='font-semibold text-gray-600'>{(details.supply != undefined )?(details.supply.confirmed)?(<MdDone className='font-bold text-gray-600'/>):(<RxCross1 className='font-semibold text-gray-600'/>):(<></>)}</p>
              </div>
              <div className='flex hover:bg-slate-100 px-1  justify-between py-1 border-y'>
                <p>Total Supply</p>
                <p className='font-semibold text-gray-600'>{(details.supply)?(millify(details.supply.total)):("Not Availabel")}</p>
              </div>
              <div className='flex hover:bg-slate-100 px-1  justify-between py-1 border-y'>
                <p>Circulating Supply</p>
                <p className='font-semibold text-gray-600'>{(details.supply)?(millify(details.supply.circulating)):("Not Availabel")}</p>
              </div>
            </div>
          </div>

          </div>

          {/* lasr container */}
          <div className='w-full flex justify-around flex-wrap p-3 select-none mt-3 border-t-2'>
          <div className='w-[400px] flex- flex-col'>
            <h1 className='text-3xl text-blue-600  py-5 font-semibold '>Know More Abouth {details.name}</h1>
            <p  className='text-gray-600 text-sm'>{details.description}</p>
          </div>
          <div className='w-[320px] flex- flex-col '> <div className='text-2xl text-blue-600 py-5 font-semibold'>All Links to Connect</div>
          {(details.links)?(details.links.slice(0,7).map((L,index)=> <a href={L.url} key={index} target='_blank' className='flex hover:bg-slate-100 px-1  justify-between py-1 border-y'>
          <p className='font-bold'>{L.type}</p>
          <p className=''>{L.name}</p>
          </a>)):(<></>)
          
          }
          </div>


          </div>



          </div>
        ):(<div>Data Not Found</div>))
    )
  }
