import { Route, Router, Routes,  } from "react-router";
import "./App.css";
import Navbar from "./component/Navbar";
import Home from "./component/Home";
import Exchange from "./component/Exchange";
import Currency from "./component/Currency";
import News from "./component/News";
import Footer from "./component/Footer";
import Currencydetails from "./component/Currencydetails";


function App() {
  return (
    <div className="flex flex-col md:flex-row w-full " >
        {/* navbar */}
        <div className="md:w-1/5 w-5/5 md:h-[100vh] h-[140px] py-2 flex md:fixed flex-col md:flex-col justify-start bg-cyan-900">
          <Navbar/>  
        </div>

        {/* main */}
        <div className="md:w-4/5 w-full absolute mt-[140px] md:mt-2 right-0">
          <Routes>
            <Route path="/" exact element={<Home  />} />
            <Route path="/exchange" exact element={<Exchange/>} />
            <Route path="/currency" exact element={<Currency />} />
            <Route path="/currencydetails/:id" exact element={<Currencydetails/>} />

            <Route path="/news" exact element={<News/>} />
          </Routes>

          


          <Footer/>
        </div>
    
    
    </div>
  );
}

export default App;
