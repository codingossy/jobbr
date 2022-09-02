import React, { useEffect, useState } from 'react';
import Header from './components/navbar/Header';
import MobileNav from './components/navbar/MobileNav';
import Control from './components/reuse/Index';


import Aos from "aos";
import "aos/dist/aos.css";



function App() {

  
  useEffect(() => {
    Aos.init({ duration: 1000});
}, []);


  const [navMobile, setNavMobile] = useState(false)


  return (

    <div className=''>
      
      
      <Header setNavMobile={setNavMobile}/>
          <div className={`${navMobile ? '-right-0' : '-right-full'} fixed top-0 bottom-0 z-30 w-full transition-all ease-in duration-500`}>
        <MobileNav setNavMobile={setNavMobile}/>
        </div>

        <Control />


    </div>
  );
}

export default App;
