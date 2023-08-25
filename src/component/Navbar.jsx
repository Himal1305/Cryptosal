import React from "react";
import logo from "../imgs/logo.jpg";
import { NavLink } from "react-router-dom";
import { BiHome, BiNews } from "react-icons/bi";
import { BsCurrencyBitcoin } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { pagechange } from "../redux/Slice/basicdataSlice"

export default function Navbar() {
const dispatch=useDispatch()

const {page}=useSelector((state)=>state.basicdata)

 
 function falsehomehandlar(ev) {
  if(ev.target.localName==="p"){
    dispatch(pagechange(ev.target.innerHTML));
  }
  else if(ev.target.localName==="a"){
    dispatch(pagechange(ev.target.lastChild.innerHTML));
  }
 }

 return (
    <>
      <div className="flex px-3 items-center gap-3 h-[100px]">
        <img className="rounded-full md:h-10 h-10" src={logo} alt="" />
        <h1 className="text-2xl text-white font-semibold capitalize">
          CRYPTOSAL
        </h1>
      </div>
      
      <div className="flex md:flex-col flex-row flex-wrap justify-center  md:gap-4 gap-1 md:mt-2 mt-0 w-full text-white  md:text-lg text-sm ">

     


        <NavLink to="/" value="dvdv" onClick={falsehomehandlar}  className={(page==="Home")?("bg-cyan-400 md:px-6 px-1 md:py-2 py-1 flex items-center md:gap-2  gap-1 rounded-sm"):(" md:px-6 px-1 md:py-2 py-1 flex items-center md:gap-2  gap-1 rounded-sm") }>
          
          <BiHome className="ptag md:text-2xl text-lg"  />
          <p className="" >Home</p>
        </NavLink>
   
        <NavLink  onClick={falsehomehandlar} to="/exchange" className={(page==="Crypto Exchange")?("bg-cyan-400 md:px-6 px-1 md:py-2 py-1 flex items-center md:gap-2  gap-1 rounded-sm"):(" md:px-6 px-1 md:py-2 py-1 flex items-center md:gap-2  gap-1 rounded-sm") }>      
          <BiNews  className="text-2xl" />
          <p>Crypto Exchange</p>
        </NavLink>
        <NavLink to="/currency" onClick={falsehomehandlar}  className={(page==="Crypto Crrriency")?("bg-cyan-400 md:px-6 px-1 md:py-2 py-1 flex items-center md:gap-2  gap-1 rounded-sm "):("md:px-6 px-1 md:py-2 py-1 flex items-center md:gap-2  gap-1 rounded-sm") }>
            
          <BsCurrencyBitcoin className="text-2xl" />
          <p className="z-0">Crypto Crrriency</p>
        </NavLink>
        
        <NavLink  onClick={falsehomehandlar} to="/news" className={(page==="Crypto News")?("bg-cyan-400 md:px-6 px-1 md:py-2 py-1 flex items-center md:gap-2  gap-1 rounded-sm"):(" md:px-6 px-1 md:py-2 py-1 flex items-center md:gap-2  gap-1 rounded-sm") }>      
          <BiNews  className="text-2xl" />
          <p>Crypto News</p>
        </NavLink>
      </div>
    </>
  );
}
