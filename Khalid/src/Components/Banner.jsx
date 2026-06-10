import React from 'react'
import { FaCertificate, FaDumbbell, FaFacebook, FaHeartbeat, FaInstagram, FaMedal, FaPlay, FaRunning, FaThumbsUp, FaTwitter, FaUsers } from 'react-icons/fa'
import bgImage from '../assets/bannertop.png'
export default function Banner() {
  return (
    <div>
        {/* Banner section  */}
        <div id='home' className='relative h-screen bg-black overflow-hidden flex flex-col lg:flex-row items-center justify-center lg:justify-between '>
            {/* content section  */}
            <div className='relative z-10 flex flex-col justify-center items-start px-6 sm:px-10 lg:px-20 text-white bg-gradient-to-r from-black via-transparent to-transparent h-full w-full lg:w-1/2'>
                <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 animate-slideInLeft text-center lg:text-left '>Evaluate Your <span className='text-yellow-500'>WorkOut</span></h1>
                <p className='text-sm sm:text-base md:text-lg lg:text-xl mb-8 animate-slideInLeft delay-200 text-center lg:text-left'>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam ipsa sit repellat doloribus blanditiis labore impedit minus repudiandae rerum voluptates nostrum corrupti praesentium quod minima, architecto repellendus iusto commodi nemo maxime ipsum. Voluptatibus, aperiam.
                </p>

                {/* iccons sections */}
                <div className='flex flex-wrap sm:flex-row gap-4 justify-center lg:justify-start mb-8 animate-fadeIn delay-400'>
                    <div className='flex items-center gap-3 group'>
                        <   FaDumbbell className='text-yellow-500 text-2xl sm:text-3xl transition-transform transform group-hover:rotate-12 group-hover:scale-110' />
                        <span className='text-sm sm:text:lg font-medium'>Strength Training</span>
                    </div>

                    <div className='flex items-center gap-3 group'>
                        <   FaHeartbeat className='text-yellow-500 text-2xl sm:text-3xl transition-transform transform group-hover:rotate-12 group-hover:scale-110' />
                        <span className='text-sm sm:text:lg font-medium'>Cardio Fitness</span>
                    </div>

                    <div className='flex items-center gap-3 group'>
                        <   FaRunning className='text-yellow-500 text-2xl sm:text-3xl transition-transform transform group-hover:rotate-12 group-hover:scale-110' />
                        <span className='text-sm sm:text:lg font-medium'>Endurances</span>
                    </div>
                </div>

                <div className='flex flex-wrap gap-4 jsutify-center lg:justify-start mb-6'>
                    <button className='px-4 sm:px-6 py-2 sm:py-3 bg-yellow-400 text-black font-semibold rounded-full shadow-md hover:bg-yellow-500 transition-transform transform hover:scale-105 delay-600'>Get Started </button>

                    <button className='px-4 sm:px-6 py-2 sm:py-3 bg-white text-black font-semibold rounded-full shadow-md hover:bg-gray-500 transition-transform transform hover:scale-105 delay-500 flex items-center gap-2'><FaPlay className='text-black text-xl'/>Watch Demo</button>
                </div>

                {/* social media Icons  */}
                <div className='flex gap-6 mt-4 animate-fateIn delay-800 justify-center lg:justify-start'>
                    <a href="" aria-label='Facebook' className='text-blue-500 text-2xl sm:text-3xl transition-transform transform hover:scale-110'><FaFacebook/></a>

                     <a href="" aria-label='Instagram' className='text-red-500 text-2xl sm:text-3xl transition-transform transform hover:scale-110'><FaInstagram/></a>

                      <a href="" aria-label='Twitter' className='text-blue-600 text-2xl sm:text-3xl transition-transform transform hover:scale-110'><FaTwitter/></a>
                </div>
            </div>

            {/* background image  */}

            <div className='absolute top-0 right-0 w-full h-full lg:w-1/2 flex justify-center items-center '>
                <img src={bgImage} alt="" className='h-full w-full object-contain opacity-80 animate-zoomInSlow'/>
            </div>
        </div>

        {/* second section  */}
        <div className='bg-black py-12 sm:py-16 text-white'>
            <div className='container mx-auto px-4 sm:px-8 text-center'>
                <div className='grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-12'>
                    <div className='flex flex-col items-center gap-4 animate-fadeIn delay-200'>
                        <FaMedal className='text-yellow-500 text-3xl sm:text-4xl'/>
                        <span className='text-sm sm:text-lg md:text-xl font-semibold'> 5+ years of Services</span>
                    </div>

                     <div className='flex flex-col items-center gap-4 animate-fadeIn delay-400'>
                        <FaCertificate className='text-yellow-500 text-3xl sm:text-4xl'/>
                        <span className='text-sm sm:text-lg md:text-xl font-semibold'> 50+ Certified Trainers </span>
                    </div>

                     <div className='flex flex-col items-center gap-4 animate-fadeIn delay-600'>
                        <FaUsers className='text-yellow-500 text-3xl sm:text-4xl'/>
                        <span className='text-sm sm:text-lg md:text-xl font-semibold'> 1000+ Happy Members</span>
                    </div>

                    <div className='flex flex-col items-center gap-4 animate-fadeIn delay-800'>
                        <FaThumbsUp className='text-yellow-500 text-3xl sm:text-4xl'/>
                        <span className='text-sm sm:text-lg md:text-xl font-semibold'> 95% Customer Satisfication </span>
                    </div>
                </div>
            </div>

        </div>
    </div>
  )
}
