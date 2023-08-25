import { configureStore } from '@reduxjs/toolkit'
import  ApidataSlice  from './Slice/ApidataSlice'
import basicdataSlice from './Slice/basicdataSlice'
import newsApiSlice from './Slice/newsApiSlice'
import CryptodetailsSlice from "./Slice/CryptodetailsSlice"
export const store = configureStore({
  reducer: {
    Apidata:ApidataSlice,
    basicdata:basicdataSlice,
    newsfetchdata:newsApiSlice,
    Cryptodetails:CryptodetailsSlice,
  },
})