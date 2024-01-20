// eslint-disable-next-line no-unused-vars
import React from 'react'
import { FaRegHeart } from "react-icons/fa";
import { BiSolidMessageRoundedDots } from "react-icons/bi";
import { TbLocationFilled } from "react-icons/tb";
import { HiOutlineEmojiHappy } from "react-icons/hi";

function Post() {
  return (
    <div className='border my-7 bg-white rounded-md'>
        {/* post header */}
        <div className='flex items-center p-5'>
        <img
              className="h-12 rounded-full border p-1 mr-3"
              src="https://lh3.googleusercontent.com/a/ACg8ocJRZxeNSjtgbMEksCurIUa1xzA6b1NVpXdRENyZ3xv-1g=s432-c-no"
              alt="user-image"
            />

           <p className="flex-1 font-bold">Ibrahim_ahm25</p>

           <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
              />
            </svg>
        </div>
        {/* post image */}
        <img
            className="w-full object-cover"
            src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=874&q=80"
            alt=""
          />

          <div className='flex justify-between px-4 pt-4'>
            <div className='flex space-x-4'>
              <FaRegHeart className='cursor-pointer text-[16px]'/>
              <BiSolidMessageRoundedDots className='cursor-pointer text-[16px]'/>
              <TbLocationFilled className='cursor-pointer text-[16px]'/>
            </div>
          
             {/* comments */}
          </div>
          <p className="p-5 truncate">
              <span className="font-bold">2 likes</span>
               <br />
              <span className="font-bold mr-2">codewithsahand</span>
               nice picture!
             </p>

            <div className=' flex items-center'>
              <input type='text' placeholder='Enter your comment ...' 
              className='border-none flex-1 focus:ring-0'/>
              <HiOutlineEmojiHappy className='mr-4 mt-2 text-xl'/>
            </div>
   
    </div>
  )
}

export default Post