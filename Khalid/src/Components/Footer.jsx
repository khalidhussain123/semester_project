import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react'
import React from 'react'
import {Link} from 'react-scroll'
export default function Footer() {
  return (
    <footer className='bg-gradient-to-b from-black via-gray-900 to-black text-white font-poopins'>
        <div className='container mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-3 gap-8'>
            {/* brand section  */}
            <div className=''>
                <h1 className='text-3xl text-transparent bg-clip-text bg-text-transparent bg-gradient-to-r from-blue-400 to-purple-600 font-extrabold tracking-wider'>FitLife Gym</h1>
                <p className='text-gray-400 mt-4 leading-relaxed '>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur omnis voluptates fugit blanditiis error repellendus.
                </p>
            </div>
            {/* navigation links  */}
            <div>
                <h2 className='text-2xl text-transparent bg-clip-text bg-text-transparent bg-gradient-to-r from-blue-400 to-purple-600 font-semibold'>Quick Links</h2>
                <ul className='mt-4 space-y-2'>
                    <li>
                        <Link to='home' className='cursor-pointer hover:underline hover:text-gray-300'>Home </Link>
                    </li>

                    <li>
                        <Link to='opinion' className='cursor-pointer hover:underline hover:text-gray-300'>Opinion </Link>
                    </li>

                    <li>
                        <Link to='trainer' className='cursor-pointer hover:underline hover:text-gray-300'>Trainer </Link>
                    </li>

                    <li>
                        <Link to='contact' className='cursor-pointer hover:underline hover:text-gray-300'>Contact </Link>
                    </li>
                </ul>
            </div>

            {/* social links  */}
            <div>
                <h2 className='text-2xl text-transparent bg-clip-text bg-text-transparent bg-gradient-to-r from-blue-400 to-purple-600 font-semibold'>Follow Us</h2>
                <div className='flex mt-4 space-x-4 '>
                    <a href="#" className='p-3 bg-gray-700 rounded-full hover:bg-blue-700 transition '>
                        <Facebook  className='w-6 h-6'/>
                    </a>

                     <a href="#" className='p-3 bg-gray-700 rounded-full hover:bg-blue-700 transition '>
                        <Instagram  className='w-6 h-6'/>
                    </a>

                     <a href="#" className='p-3 bg-gray-700 rounded-full hover:bg-red-700 transition '>
                        <Twitter  className='w-6 h-6'/>
                    </a>

                     <a href="#" className='p-3 bg-gray-700 rounded-full hover:bg-purple-700 transition '>
                        <Linkedin  className='w-6 h-6'/>
                    </a>
                </div>
            </div>
        </div>

        {/* bottom seciton  */}
        <div className='bg-gray-900 text-gray-500 text-center py-4'>
            <p>2026 FitLife Gym, Alright results</p>
            <p className='text-white hover:text-purple-400 cursor-pointer'>H H Rajput Digital Services </p>
        </div>
    </footer>
  )
}
