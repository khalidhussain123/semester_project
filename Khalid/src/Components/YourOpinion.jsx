import React from 'react'
import { FaQuoteLeft, FaStar, FaStarHalfAlt } from "react-icons/fa";
import { FaQuoteRight } from "react-icons/fa";
import { CircleChevronLeft,CircleChevronRight  } from 'lucide-react';

export default function YourOpinion() {
  return (
    <div id='opinions' className='bg-gradient-to-b from-black via-gray-900 to-black min-h-screen py-12 px-6'>
        {/* heading section  */}
        <div className='text-center mb-10'>
            <h2 className='text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600'>Community Opinions</h2>
            <p className='bg-gray-700 text-lg mt-2'>What People think about Us</p>
            {/* review section  */}
            <div className='group grid grid-cols-1 sm:grid-cols-2 lg:grid-rows-3 gap-10'>
                {/* review */}
                {[
                    {
                    name:"Person 1",
                    text: "Exceptional support and quality! The team went above and beyond to ensure everything was perfect. Highly recommended",
                    stars: 4.5,
                    color:"text-blue-400",
                },
                {
                    name:"Person 2",
                    text: "Exceptional support and quality! The team went above and beyond to ensure everything was perfect. Highly recommended",
                    stars: 4,
                    color:"text-green-400",
                },
                {
                    name:"Person 3",
                    text: "Exceptional support and quality! The team went above and beyond to ensure everything was perfect. Highly recommended",
                    stars: 5,
                    color:"text-pink-400",
                },
                {
                    name:"Person 4",
                    text: "Exceptional support and quality! The team went above and beyond to ensure everything was perfect. Highly recommended",
                    stars: 3.5,
                    color:"text-red-400",
                },
                 {
                    name:"Person 5",
                    text: "Exceptional support and quality! The team went above and beyond to ensure everything was perfect. Highly recommended",
                    stars: 3.5,
                    color:"text-blue-400",
                },
                 {
                    name:"Person 6",
                    text: "Exceptional support and quality! The team went above and beyond to ensure everything was perfect. Highly recommended",
                    stars: 3.5,
                    color:"text-purple-400",
                },
                ].map((review,index)=>(
                    <div key={index} className='bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 rounded-r-xl p-6 shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:scale-105'>
                        <FaQuoteLeft className={`${review.color} text-3xl`} />
                        <h3 className='text-xl font-semibold text-white mt-4'>{review.name}</h3>
                        <div className='flex items-center mt-2 mb-4 text-yellow-400 text-xl'>{Array.from({length: Math.floor(review.stars)}).map((_,i)=>(
                            <FaStar key={i}/>
                        ))}
                        {review.stars % 1 != 0 && <FaStarHalfAlt/>}</div>
                        <p className='text-gray-400 text-sm italic'>{review.text}</p>
                        <FaQuoteRight className={`${review.color} text-3xl float-right mt-4`} />
                    </div>
                    
                ))}
            </div>
            
            {/* navigation add options */}
            <div className='mt-10 flex flex-col items-center space-y-6'>
                <div className='flex items-center space-x-4'>
                    <button className='p-3 bg-gradient-to-r from-gray-700 to-gray-800 rounded-full shadow hover:bg-gradient-to-r hover:from-gray-800 hover:to-gray-900 transition-transform divide-blue-400 transform hover:scale-110'>
                        <CircleChevronLeft />
                     </button>

                      <button className='p-3 bg-gradient-to-r from-gray-700 to-gray-800 rounded-full shadow hover:bg-gradient-to-r hover:from-gray-800 hover:to-gray-900 transition-transform divide-blue-400 transform hover:scale-110'>
                        <CircleChevronRight />
                     </button>
                </div>

                {/* add options */}
                <button className='bg-gradient-to-r from-blue-500 to-purple-600 text-white px-10 py-4 rounded-full shadow-xl hover:from-blue-400 hover:to-purple-700 transform hover:scale-110 transition-transform duration-300'>Add Your Opinion</button>
            </div>
        </div>
    </div>
  )
}
