
import { Link } from "react-router-dom"
import { IoMdHome, IoMdMenu } from "react-icons/io";
import { 
  FaSearch, 
  FaLocationArrow, 
  FaRegHeart,
   } 
from "react-icons/fa";
import { MdOutlineExplore, MdOutlineCreateNewFolder  } from "react-icons/md";
import { BsCameraReels } from "react-icons/bs";
import TopUser from "./TopUser";
import { useSelector } from "react-redux";
import { Avatar } from "flowbite-react";

function Dashborad() {

   const { currentUser } = useSelector(state => state.user)

  return (
    <> 
    <div className=" flex w-full relative">
  
       <nav className=" h-screen  pl-4  bg-[#000]">
       <div className="fixed bg-gray-800 w-1 h-full left-[13%]  top-0 translate-x-0"></div>
     
      <div className="flex flex-col  space-y-8">
      <Link to="/dashborad" className="self-center whitesapce-nowrap">
        <h1 className="text-white text-2xl italic font-extrabold">Instagram</h1>
      </Link>
        <ul className="flex flex-col space-y-6 ml-2">
        
          <Link to="/dashborad" className="flex space-x-3">
          <IoMdHome className="text-4xl text-white "/>
          <span className="text-[17px] pt-1 font-extrabold text-white">Home</span>
          </Link>

          <Link to="/" className="flex space-x-3">
          <FaSearch className="text-3xl text-white "/>
          <span className="text-[17px] pt-1 font-extrabold text-white">Search</span>
          </Link>

          <Link to="/" className="flex space-x-3">
          <MdOutlineExplore className="text-4xl text-white "/>
          <span className="text-[17px] pt-1 font-extrabold text-white">Explore</span>
          </Link>

          <Link to="/" className="flex space-x-3">
          <BsCameraReels className="text-3xl text-white "/>
          <span className="text-[17px] pt-1 font-extrabold text-white">Reels</span>
          </Link>

          <Link to="/" className="flex space-x-3">
          <FaLocationArrow className="text-3xl text-white "/>
          <span className="text-[17px] pt-1 font-extrabold text-white">Message</span>
          </Link>

          <Link to="/" className="flex space-x-3">
          <FaRegHeart className="text-3xl text-white "/>
          <span className="text-[17px] pt-1 font-extrabold text-white">alerts</span>
          </Link>

          <Link to="/" className="flex space-x-3">
          <MdOutlineCreateNewFolder className="text-3xl text-white "/>
          <span className="text-[17px] pt-1 font-extrabold text-white">Create</span>
          </Link>

          
          <Link to="/profile" className="flex space-x-3">
            <Avatar
            alt="user"
             img={currentUser.profile} 
             rounded
            />
             <span className="text-[17px] pt-1 font-extrabold text-white">Profile</span>
          </Link>

          <Link to="/" className="flex space-x-3">
          <IoMdMenu className="text-3xl text-white "/>
          <span className="text-[17px] pt-1 font-extrabold text-white">More</span>
          </Link>
        </ul>
      </div>
    </nav>
    {/*  */}
    
     
     <div>
     <TopUser />
     </div>
    
     </div>
    </>
  )
}

export default Dashborad

