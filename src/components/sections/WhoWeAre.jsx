import React from 'react'

import who from '../../images/who.png'
import whorec from '../../images/whorec.png'
import leaf from '../../images/bx_bxs-leaf.png'


const WhoWeAre = () => {
  return (
    <section className='pt-44 relative'>
        <div className="container mx-auto">
            <div className='flex justify-center items-center mb-20'>
                <img data-aos="zoom-in" data-aos-delay="130"  src={leaf} alt="" />
            </div>
            <div className="flex flex-col md:flex-row lg:flex-row gap-x-10 gap-y-8 px-0 lg:px-32">

                <div className="image relative order-2 md:order-1">
                    <div className="relative">
                        <img data-aos="zoom-in" data-aos-delay="150" src={whorec} alt="" className='w-[60%] absolute -z-10 left-8 -top-20'/>
                        <img data-aos="zoom-in" data-aos-delay="155" src={who} alt="" className='w-[100%]'/>
                    </div>
                </div>

                <div className="text max-w-[500px] order-1 md:order-2 mb-20">
                    <h1 data-aos="fade-up" data-aos-delay="130"  className='text-xl font-semibold capitalize'>who we are</h1>
                    <p data-aos="fade-up" data-aos-delay="135" className='mb-4'>We build strong grassroots leaders, always considering the next generation</p>

                    <p data-aos="fade-up" data-aos-delay="140" className='mb-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin neque, magna lorem elementum egestas. Pretium tempus odio nunc ultrices. Lacus, malesuada pellentesque sagittis viverra viverra lorem vulputate facilisis sagittis. A cursus amet leo donec pellentesque.</p>

                    <p data-aos="fade-up" data-aos-delay="145" className='mb-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, a!</p>

                    <div className="button">
                        <button className='text-green-600 border-b border-green-500 capitalize'>learn more</button>
                    </div>

                    <div className='relative'>
                        <img src={leaf} alt="" className='absolute right-0'/>
                    </div>
                </div>


            </div>
        </div>

    </section>
  )
}

export default WhoWeAre