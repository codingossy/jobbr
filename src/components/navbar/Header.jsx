import React from 'react'
import Navbar from '../navbar/Navbar'

import { HiMenu } from 'react-icons/hi';



const Header = ( {setNavMobile}) => {
  return (
    <header className='py-3 bg-green-600'>

        <div className='mx-auto container '>

            <div className='flex items-center justify-between'>

        <h1 className='uppercase text-white'>jobbr</h1>
            




        <Navbar  />

        {/* mobile nav */}
        <HiMenu onClick={() => setNavMobile(true)} className='lg:hidden text-3xl text-white cursor-pointer'/>
            {/* mobile nav ends */}


            </div>

        </div>

    </header>
  )
}

export default Header