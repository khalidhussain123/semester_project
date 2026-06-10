import React from 'react'
import {motion} from 'framer-motion'
import { Mail, MapPin, Phone } from 'lucide-react'
export default function Contact() {
  return (
    <div className='min-h-screen flex justify-center bg-gradient-to-b from-black via-gray-900 to-black text-white items-center px-6 ' id='contact'>
        <motion.div initial={{opacity:0, x: -50}} animate={{opacity:1, x: 0}} transition={{duration:1}} className="w-full max-w-3xl lg:max-w-5xl grid lg:grid-cols-2 gap-2">

            {/* address section  */}
            <div className='bg-gray-900 p-6 rounded-2xl shadow-lg'>
                <h2 className='text-3xl lg:text-4xl font-bold text-transparent bg-clip-text bg-text-transparent bg-gradient-to-r from-blue-400 to-purple-600 mb-6'>Get In Touch</h2>
                <div className='space-y-4'>
                    <div className='flex items-center space-x-3 '>
                        <MapPin className='w-6 h-6 text-blue-400'/>
                        <p className='text-lg font-medium'>Gym street, fitness city LKO</p>
                    </div>

                    <div className='flex items-center space-x-3 '>
                        <Phone className='w-6 h-6 text-blue-400'/>
                        <p className='text-lg font-medium'>+92300 343546524</p>
                    </div>

                    <div className='flex items-center space-x-3 '>
                        <Mail className='w-6 h-6 text-blue-400'/>
                        <p className='text-lg font-medium'>aliahmed@gmail.com</p>
                    </div>
                </div>
            </div>

            {/* contact form  */}
            <motion.form initial={{opacity:0, x: -50}} animate={{opacity:1, x: 0}} transition={{duration:1}} className="bg-gray-900 p-6 rounded-2xl space-y-6">
                <h2 className='text-3xl lg:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600 mb-4'>Contact Us</h2>
                <div>
                    <label className='block text-sm font-medium mb-2'>Your Name</label>
                    <input type="text" placeholder='Enter your name' className='w-full p-3 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-200'/>
                </div>

                 <div>
                    <label className='block text-sm font-medium mb-2'>Your Email</label>
                    <input type="email" placeholder='Enter your email' className='w-full p-3 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-200'/>
                </div>

                 <div>
                    <label className='block text-sm font-medium mb-2'>Your Messege</label>
                    <textarea rows={4} placeholder='Enter your messege' className='w-full p-3 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-200'/> 
                </div>

                <button  type='submit' className='p-3 w-full bg-gradient-to-r from-blue-400 top-6 rounded-lg text-lg font-semibold hover:opacity-90 transition'>Send Messege</button>

            </motion.form>
        </motion.div>
    </div>
  )
}
