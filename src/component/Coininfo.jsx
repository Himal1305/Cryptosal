import { useSelector } from 'react-redux'
import millify from "millify";
import FadeLoader from "react-spinners/FadeLoader";



export default function Coininfo() {

const {data,isLoading}=useSelector((state)=>state.Apidata)

  return isLoading ?
  (
    <div className='w-[100%] h-[100%] flex justify-center items-center' ><FadeLoader color="#36d7b7" /> </div> 
  ) : (data.stats) ? (
    <div className="">
      <h1 className="md:text-5xl text-3xl font-medium">Global Crypto Stats</h1>
      <div className="flex   flex-wrap gap-2 mt-9 w-full">
        <div className="w-[48%] h-28 ">
          <p className="text-base text-gray-400 font-semibold ">
            Total Cryptocurrencies
          </p>
          <p className="text-3xl">{millify(data.stats.totalCoins)}</p>
        </div>
        <div className="w-[48%] h-28 ">
          <p className="text-base text-gray-400 font-semibold ">
            Total Exchanges{" "}
          </p>
          <p className="text-3xl ">{millify(data.stats.totalExchanges)}</p>
        </div>
        <div className="w-[48%] h-28 ">
          <p className="text-base text-gray-400 font-semibold ">
            Total Market Cap
          </p>
          <p className="text-3xl">{millify(data.stats.totalMarketCap)}</p>
        </div>
        <div className="w-[48%] h-28 ">
          <p className="text-base text-gray-400 font-semibold ">
            Total 24h Volume
          </p>
          <p className="text-3xl">{millify(data.stats.total24hVolume)}</p>
        </div>
        <div className="w-[48%] h-28 ">
          <p className="text-base text-gray-400 font-semibold ">
            Total Markets
          </p>
          <p className="text-3xl"> {millify(data.stats.totalMarkets)}</p>
        </div>
      </div>
    </div>
  ) : (
    <></>
  );
}
