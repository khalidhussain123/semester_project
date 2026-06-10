import React from 'react'
import Wci from '../assets/wcu1.jpg';
import Wci2 from '../assets/wcu2.jpg';
import Wci3 from '../assets/wcu3.jpg';
export default function Wcu() {
  return (
    <div className='bg-gradient-to-b from-black via-gray-800 to-black py-12'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
            <div className='text-center mb-12'>
                <h2 className='text-3xl sm:text-4xl lg:text-5xl font-extrabold bg-gradient-to-r from-pink-300 via-indigo-300 to-teal-300 text-transparent bg-clip-text'>
                    Why Choose Us
                </h2>
                <p className='mt-4 text-gray-300 text-sm sm:text-base lg:text-lg font-light'>
                    Discover why we stand out with quality, commitment and results.
                </p>

                {/* content section  */}
                <div className='flex flex-col lg:flex-row items-start gap-12 '>
                    {/* left section  */}
                    <div className='lg:w-1/2 w-full'>
                        <div className='grid grid-cols-1 sm:grid-cols-2 gap-8 -ml-2 sm:-ml-4 lg:-ml-6 xl:-ml-8'>
                            {[
                                {
                                    title: "Expert Trainer",
                                    text: "Highly Qualified Trainer to help you achieve your goals."
                                },
                                {
                                    title: "Expert Trainer",
                                    text: "Highly Qualified Trainer to help you achieve your goals."
                                },
                                {
                                    title: "Expert Trainer",
                                    text: "Highly Qualified Trainer to help you achieve your goals."
                                },
                                {
                                    title: "Expert Trainer",
                                    text: "Highly Qualified Trainer to help you achieve your goals."
                                },
                            ].map((box,index)=>(
                                <div key={index} className='relative flex flex-col justify-center items-center space-x-4 p-6 bg-gradient-to-r from-pink-100 via-purple-100 to-indigo-100 text-gray-800 rounded-xl shadow-lg hover:scale-105 transition-transform duration-300'>
                                    <h4 className='font-extrabold text-lg sm:text-xl text-center'>{box.title}</h4>
                                    <p className='text-sm sm:text-md font-light text-center'>{box.text}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* right section  */}
                    <div className='lg:w-1/2 w-full'>
                            <div className='grid grid-cols-1 lg:grid-cols-2 gap-6'>
                                 {/* two verticle images  */}
                                 <div className='grid grid-rows-2 gap-6'>
                                    <img src={Wci} alt="img1" loading='lazy' className='w-full h-full object-cover rounded-lg shadow-lg border border-gray-700 hover:scale-105 duration-300 transition-transform' />

                                    <img src={Wci2} alt="img1" loading='lazy' className='w-full h-full object-cover rounded-lg shadow-lg border border-gray-700 hover:scale-105 duration-300 transition-transform' />
                                 </div>
                                {/* horizontal images  */}
                                <div className='w-full'>
                                    <img src={Wci3} alt="img2" loading='lazy' className='w-full h-full object-cover rounded-lg shadow-lg border border-gray-700 hover:scale-105 duration-300 transition-transform'/>
                                </div>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
