import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div className='w-full p-6 flex flex-col items-center justify-center gap-2'>
      <div className='h-px w-full bg-black'></div>
      <div className='w-full flex items-center md:justify-between justify-center sm:flex-row flex-col flex-wrap gap-2'>
      <div className='flex gap-2'>
        <Link className='text-xs text-gray-900 underline'>Privacy Policy</Link>
        <Link className='text-xs text-gray-900 underline'>Terms of Use</Link>
        <Link className='text-xs text-gray-900 underline'>Cookie Preference</Link>
      </div>
        <div>
      <p className='text-xs text-center'><i className="ri-copyright-line"></i> 2024 Shri Gopal Plywood & Hardware. All rights reserved.</p>
      </div>
      </div>
    </div>
  )
}

export default Footer