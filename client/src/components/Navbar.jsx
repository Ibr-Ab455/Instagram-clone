// eslint-disable-next-line no-unused-vars
import React from 'react'
import image9 from '../../src/assets/images/image_9.png'
import { GoHomeFill } from "react-icons/go";
import { BiSolidMessageRoundedDots } from "react-icons/bi";
import { MdOutlineExplore } from "react-icons/md";
import { MdCreateNewFolder } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa";
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { signoutSucess } from '../redux/api/UserSlice'
import { useDispatch } from 'react-redux'




function Navbar() {

  const dispatch = useDispatch();

  const { currentUser } = useSelector(state => state.user)

  const handleSignout = async () => {
    try {
      const res = await fetch('/api/signout', {
        method: "POST",
      });
      const data = await res.json();
      if(!res.ok){
        console.log(data.message);
      }
      else{
        dispatch(signoutSucess())
      }
    }
    catch(error) {
     console.log(error.message)
    }
   }

  return (
    
    <div className='sticky top-0 border-b shadow bg-white z-30'>
        <div className='flex justify-between h-18 items-center mx-4 xl:max-w-5xl xl:mx-auto py-2'>
            {/* left */}
            <Link to="/">
            <div className='cursor-pointer w-24 hidden lg:inline-grid'>
            <img src={image9} alt='logo'/>
            </div>
            </Link>
        
        
        {/* right */}

         <div className='flex space-x-6 relative'>
          <Link to="/">
          <GoHomeFill className='md:text-2xl text-2xl cursor-pointer '/>
          </Link>
           
           <BiSolidMessageRoundedDots className='text-2xl cursor-pointer hidden md:inline'/>
           <MdCreateNewFolder className='text-2xl cursor-pointer hidden md:inline'/>
           <MdOutlineExplore className='text-2xl cursor-pointer hidden md:inline'/>
           <FaRegHeart className='md:text-2xl text-2xl cursor-pointer'/>
         
           
           {
             <Link to="/profile">
              <img src={currentUser.profile} alt='user' className='w-8 h-8 rounded-full cursor-pointer'/>
             </Link>
              
             
           }

            <button onClick={handleSignout} className="font-semibold text-blue-400 text-sm md:hidden inline">
             Logg ut
            </button>
           
         </div>
        
        </div>
    </div>
  )
}

export default Navbar