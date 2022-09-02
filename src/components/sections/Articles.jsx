import React from 'react'
import leaf from '../../images/bx_bxs-leaf.png'
import { articles } from '../reuse/Data'


const Articles = () => {
  return (
    <section className='pt-20'>
            <div className="container mx-auto">
                <div className='relative'>
                    <img src={leaf} alt="" className='absolute left-20'/>
                </div>

                <div className='text-center mb-10'>
                    <h1 data-aos="fade-up" data-aos-delay="248" className='text-2xl font-semibold capitalize'>our latest articles</h1>
                </div>

                <div className='flex flex-col gap-[45px] lg:flex-row px-0 lg:px-8'>
                    {articles.map((item, index) => {
                        const {image, heading, desc, button1, button2, name, date} = item

                        return (
                            <div data-aos="fade-up" data-aos-delay="252" key={index} className='shadow-2xl py-12 px-6 cursor-pointer transition ease-in duration-500 rounded-2xl w-full bg-white'>

                                <div className="flex flex-col justify-center items-center">
                                    <img src={image} alt="" />
                                </div>

                                <div className='pt-4 mb-10'>
                                    <div className='flex justify-between'>
                                    <h1 className='capitalize font-semibold mb-4'>{heading}</h1>
                                    <p className='text-xs text-gray-400'>{date}</p>
                                    </div>
                                    <p>{desc}</p>
                                </div>

                                <div className='buttons flex justify-between'>
                                    <button className='text-sm px-6 py-1 bg-gray-400 font-semibold'>{button1}</button>
                                    <button className='btn3'>{button2}</button>
                                </div>

                            </div>
                        )

                    })}

                </div>
            </div>
    </section>
  )
}

export default Articles