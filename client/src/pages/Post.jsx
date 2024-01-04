import image1 from '../../src/assets/images/image-2.jpg'
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { FaRegHeart } from 'react-icons/fa'
import { LuMessageCircle } from "react-icons/lu";

function Post() {
  return (
    <div className="mt-10 ml-14">
     <div className='flex flex-col w-[80%] space-y-2'>
       {/*  */}
       
       <div className='flex w-full justify-between cursor-pointer'>
         <div className='flex gap-2'>
            <img src={image1} alt='image-1' className='w-12 h-12 rounded-full border-2 border-red-500'/>
            <h3 className='pt-2 text-ms text-white'>Elecricty</h3>
         </div>
         <HiOutlineDotsHorizontal className='text-white text-xl mt-4'/>
       </div>
     
      <div>
        <div>
        <img src={image1} alt='sawir' className='rounded'/>
        </div>
        <div className='mt-2 flex space-x-2'>
         <FaRegHeart className='text-xl text-white cursor-pointer'/>
         <LuMessageCircle className='text-xl text-white cursor-pointer'/>
        </div>
      </div>
      <hr/>
     </div>
    </div>
  )
}

export default Post