import React from 'react'

// images

import img1 from '../../images/img1.png'
import img2 from '../../images/img2.png'
import img3 from '../../images/img3.png'
import img4 from '../../images/img4.png'

const Home = () => {
  return (
   <section className='relative'>
    <div className="container mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-32 lg:grid-cols-2">

            {/* text side */}
            <div className="text pt-20 max-w-[600px]">
                <h1 data-aos="fade-up" data-aos-delay="50" className='text-2xl lg:text-4xl font-semibold capitalize mb-5'>Protect Our Water Quality, Family Farms, Ranches and Unique Quality of Life</h1>
                <p data-aos="fade-up" data-aos-delay="70" className='text-sm mb-5 max-w-[400px] leading-relaxed'>Our focus is protecting our water, land, air, and working landscapes. Support a sustainable economy to improve our farms and ranches. Build grassroots leaders, always considering the next generation.</p>
                <div className='button flex gap-8 lg:gap-x-12 py-3'>
                    <button data-aos="zoom-in" data-aos-delay="80" className='btn1'>join us</button>
                    <button data-aos="zoom-in" data-aos-delay="80" className='btn2'>donate us</button>
                </div>
            </div>

            {/* images side */}
        <div className="relative">
            <div className='relative'>
                <img data-aos="zoom-in" data-aos-delay="100" src={img1} alt="" className='w-[60%]'/>
                <img data-aos="zoom-in" data-aos-delay="110"  src={img2} alt="" className='w-[40%] bottom-0 -left-10'/>
                <img data-aos="zoom-in" data-aos-delay="120"  src={img3} alt="" className='absolute w-[30%] top-0 -right-1'/>
                <img data-aos="zoom-in" data-aos-delay="125"  src={img4} alt="" className='absolute w-[60%] right-0 -bottom-28 lg:-bottom-48'/>
            </div>

        </div>


        </div>

    </div>

   </section>
  )
}

export default Home