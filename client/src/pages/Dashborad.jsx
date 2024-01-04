import { FaRegUserCircle } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import Post from './Post'
import Follow from './Follow'


function Dashborad() {
  return (
   <div className="realtive">
     <div className="fixed bg-gray-800 w-1 h-full top-0"></div>
     <div className='flex flex-col'>
       {/*  */}
       <div className="flex justify-between">
       
        <div className='w-[90%] flex gap-4 overflow-x-scroll scrollbar-none pl-2 pt-4'>
          <div className='cursor-pointer w-14'>
          <img src="https://i.pravatar.cc/150?img=4" alt='image-1' className='w-14 h-14 rounded-full border-2 p-[1.5px] border-red-500 hover:scale-110 transition-transform duration-200 ease-aut'/>
          <h2 className='truncate text-center text-sm'>Ibrahim Ahmed</h2>
          </div>
          
          <div className='cursor-pointer w-14'>
          <img src='https://i.pravatar.cc/150?img=1' alt='image-1' className='w-14 h-14 rounded-full border-2 p-[1.5px] border-red-500 hover:scale-110 transition-transform duration-200 ease-aut'/>
          <h2 className='truncate text-center text-xs'>Ibrahim Ahmed</h2>
          </div>

          <div className='cursor-pointer w-14'>
          <img src='https://i.pravatar.cc/150?img=3' alt='image-1' className='w-14 h-14 rounded-full border-2 p-[1.5px] border-red-500 hover:scale-110 transition-transform duration-200 ease-aut'/>
          <h2 className='truncate text-center text-xs'>Ibrahim Ahmed</h2>
          </div>

          <div className='cursor-pointer w-14'>
          <img src='https://i.pravatar.cc/150?img=2' alt='image-1' className='w-14 h-14 rounded-full border-2 p-[1.5px] border-red-500 hover:scale-110 transition-transform duration-200 ease-aut'/>
          <h2 className='truncate text-center text-xs'>Ibrahim Ahmed</h2>
          </div>

          <div className='cursor-pointer w-14'>
          <img src='https://i.pravatar.cc/150?img=9' alt='image-1' className='w-14 h-14 rounded-full border-2 p-[1.5px] border-red-500 hover:scale-110 transition-transform duration-200 ease-aut'/>
          <h2 className='truncate text-center text-xs'>Ibrahim Ahmed</h2>
          </div>

          <div className='cursor-pointer w-14'>
          <img src='https://i.pravatar.cc/150?img=8' alt='image-1' className='w-14 h-14 rounded-full border-2 p-[1.5px] border-red-500 hover:scale-110 transition-transform duration-200 ease-aut'/>
          <h2 className='truncate text-center text-xs'>Ibrahim Ahmed</h2>
          </div>

          <div className='cursor-pointer w-14'>
          <img src='https://i.pravatar.cc/150?img=8' alt='image-1' className='w-14 h-14 rounded-full border-2 p-[1.5px] border-red-500 hover:scale-110 transition-transform duration-200 ease-aut'/>
          <h2 className='truncate text-center text-xs'>Ibrahim Ahmed</h2>
          </div>

          <div className='cursor-pointer w-14'>
          <img src='https://i.pravatar.cc/150?img=8' alt='image-1' className='w-14 h-14 rounded-full border-2 p-[1.5px] border-red-500 hover:scale-110 transition-transform duration-200 ease-aut'/>
          <h2 className='truncate text-center text-xs'>Ibrahim Ahmed</h2>
          </div>

          <div className='cursor-pointer w-14'>
          <img src='https://i.pravatar.cc/150?img=8' alt='image-1' className='w-14 h-14 rounded-full border-2 p-[1.5px] border-red-500 hover:scale-110 transition-transform duration-200 ease-aut'/>
          <h2 className='truncate text-center text-xs'>Ibrahim Ahmed</h2>
          </div>

          <div className='cursor-pointer w-14'>
          <img src='https://i.pravatar.cc/150?img=8' alt='image-1' className='w-14 h-14 rounded-full border-2 p-[1.5px] border-red-500 hover:scale-110 transition-transform duration-200 ease-aut'/>
          <h2 className='truncate text-center text-xs'>Ibrahim Ahmed</h2>
          </div>

          <div className='cursor-pointer w-14'>
          <img src='https://i.pravatar.cc/150?img=8' alt='image-1' className='w-14 h-14 rounded-full border-2 p-[1.5px] border-red-500 hover:scale-110 transition-transform duration-200 ease-aut'/>
          <h2 className='truncate text-center text-xs'>Ibrahim Ahmed</h2>
          </div>

          <div className='cursor-pointer w-14'>
          <img src='https://i.pravatar.cc/150?img=8' alt='image-1' className='w-14 h-14 rounded-full border-2 p-[1.5px] border-red-500 hover:scale-110 transition-transform duration-200 ease-aut'/>
          <h2 className='truncate text-center text-xs'>Ibrahim Ahmed</h2>
          </div>
        </div>
        <div className='flex pt-6 pl-4'>
          <Link to="/profile">
          <FaRegUserCircle className=' text-3xl text-white'/>
          </Link>
        </div>
       </div>
       {/*  */}
       {/*  */}
       <div className='flex gap-10'>
        <div>
        <Post/>
        </div>
         <Follow/>
       </div>
     </div>
   </div>
  )
}

export default Dashborad

