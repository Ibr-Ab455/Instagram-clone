// eslint-disable-next-line no-unused-vars
import React from 'react'
import image9 from '../../src/assets/images/image_9.png'
import { GoHomeFill } from "react-icons/go";
import { BiSolidMessageRoundedDots } from "react-icons/bi";
import { MdOutlineExplore } from "react-icons/md";
import { MdCreateNewFolder } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa";
import { FaUserCircle } from "react-icons/fa";


function Navbar() {
  return (
    
    <div className='sticky top-0 border-b shadow bg-white z-30'>
        <div className='flex justify-between h-18 items-center mx-4 xl:max-w-5xl xl:mx-auto'>
            {/* left */}
          <div className='cursor-pointer w-24 hidden lg:inline-grid'>
            <img src={image9} alt='logo'/>
          </div>
        
        {/* right */}

         <div className='flex space-x-6'>
           <GoHomeFill className='text-xl cursor-pointer'/>
           <BiSolidMessageRoundedDots className='text-xl cursor-pointer'/>
           <MdCreateNewFolder className='text-xl cursor-pointer'/>
           <MdOutlineExplore className='text-xl cursor-pointer'/>
           <FaRegHeart className='text-2xl cursor-pointer'/>
           <FaUserCircle className='text-xl cursor-pointer'/>
         </div>
        
        </div>
    </div>
  )
}

export default Navbar