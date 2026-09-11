import React from 'react'

import Logo from '../assets/logo-text.png'

const Navbar = () => {
  return (
    <div className='bg-white border border-gray-200 sticky top-0 z-50'>
        <div className=' py-4 max-w-[1200px] mx-auto flex items-center justify-between '>
      <div>
        <img src={Logo} alt="" />
      </div>

      <div>
        <ul className='flex gap-6'>
            <li className='text-[#DB2777]'>Home</li>
            <li>Technologies</li>
            <li>Projects</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
      </div>

      <div className='flex gap-6 items-center'>
        <button>Sign In</button>
        <button className='bg-[#DB2777] text-white px-5 py-2 rounded-4xl'>Sign Up</button>
      </div>
    </div>
    </div>
   
  )
}

export default Navbar
