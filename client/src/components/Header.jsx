import { Navbar } from "flowbite-react"
import { Link } from "react-router-dom"
import { IoMdHome, IoMdMenu } from "react-icons/io";
import { FaSearch, FaLocationArrow, FaRegHeart, FaRegUserCircle } from "react-icons/fa";
import { MdOutlineExplore, MdOutlineCreateNewFolder  } from "react-icons/md";
import { BsCameraReels } from "react-icons/bs";

function Header() {
  return (
    <Navbar className=" w-[20%] h-[100vh] bg-[#191919] top-0 sticky">
      <div className="flex flex-col space-y-8">
      <Link to="/" className="self-center whitesapce-nowrap">
        <h1 className="text-white text-2xl italic font-extrabold">Instagram</h1>
      </Link>
        <ul className="flex flex-col space-y-6 ml-2">
        
          <Link to="/" className="flex space-x-3">
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

          
          <Link to="/" className="flex space-x-3">
          <FaRegUserCircle className="text-3xl text-white "/>
          <span className="text-[17px] pt-1 font-extrabold text-white">Profile</span>
          </Link>

          <Link to="/" className="flex space-x-3">
          <IoMdMenu className="text-3xl text-white "/>
          <span className="text-[17px] pt-1 font-extrabold text-white">More</span>
          </Link>
        </ul>
      </div>
     
      
    </Navbar>
  )
}

export default Header