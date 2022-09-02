import React from 'react'

import leaf from '../../images/bx_bxs-leaf.png'
import collage from '../../images/Group 1.png'

const Work = () => {
  return (
    <section className='pt-6'>
        <div className="container mx-auto">
            <div className='relative'>
                <img  data-aos="zoom-in" data-aos-delay="180" src={leaf} alt="" className='absolute left-20 -top-10'/>
            </div>

        <div className='flex flex-col md:flex-row lg:flex-row gap-x-10 gap-y-8'>
            <div className='text max-w-[500px] pt-10'>
                <h1  data-aos="fade-up" data-aos-delay="182" className='text-2xl capitalize font-semibold mb-5'>our work</h1>
                <p  data-aos="fade-up" data-aos-delay="188">Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi consectetur tenetur aperiam nobis suscipit, quidem facere iure maxime adipisci ducimus. Incidunt voluptates nisi rem aliquid dolores minima, a doloribus repudiandae.</p>

               <div className='pt-5'>
               <button  data-aos="zoom-in" data-aos-delay="190" className='btn3'>view all</button>
               </div>
            </div>

            <div className='image'>
                <img  data-aos="zoom-in" data-aos-delay="195" src={collage} alt="" className='w-full lg:w-[80%]'/>
            </div>

        </div>

        <div className='relative'>
                <img  data-aos="zoom-in" data-aos-delay="198" src={leaf} alt="" className='absolute bottom-10 right-5'/>
            </div>


        </div>
    </section>
  )
}

export default Work