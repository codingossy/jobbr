import React from 'react'
import leaf from '../../images/bx_bxs-leaf.png'


import a1 from '../../images/a1.png'
import a2 from '../../images/a2.png'
import a3 from '../../images/a3.png'
import a4 from '../../images/a4.png'
import a5 from '../../images/a5.png'

const People = () => {
  return (
   <section className='pt-10'>
        <div className="container mx-auto">
            <div>
                <img src={leaf} alt="" />
            </div>
            <div className='flex mb-10 items-center justify-center'>
                <h1  data-aos="fade-up" data-aos-delay="200" className='text-2xl font-semibold capitalize'>what our people say</h1>
            </div>

            <div className='relative'>
                <div className='relative flex items-center justify-center'>
                    <img  data-aos="zoom-in" data-aos-delay="210" src={a1} alt="" className='border rounded-full border-green-400 p-10'/>
                    <img data-aos="zoom-in" data-aos-delay="217" src={a2} alt="" className='absolute left-0 w-20'/>
                    <img data-aos="zoom-in" data-aos-delay="225" src={a3} alt="" className='absolute right-20 w-20'/>
                    <img data-aos="zoom-in" data-aos-delay="233" src={a4} alt="" className='absolute w-20 right-0 top-0'/>
                    <img data-aos="zoom-in" data-aos-delay="240" src={a5} alt="" className='absolute w-20 left-20 top-0'/>
                </div>

            </div>

            <div className='text-center flex items-center justify-center py-10'>
                <p data-aos="fade-up" data-aos-delay="243" className='max-w-[800px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. In quam quod dolor. Optio amet quasi, eaque expedita ab, voluptas accusamus nisi, illum minus similique iusto sequi itaque explicabo non. Porro culpa debitis beatae in quibusdam cum itaque officia adipisci. Officia dolore quisquam nam explicabo optio voluptatibus odio pariatur laboriosam cumque!</p>
     
            </div>

            <div className='flex items-center justify-center'>
               <h3 className='pt-2 capitalize border-b border-green-500 font-semibold text-2xl'>matter mayrs</h3>
               </div>


               <div className='relative'>
                <img src={leaf} alt="" className='absolute right-5'/>
            </div>


        </div>
   </section>
  )
}

export default People