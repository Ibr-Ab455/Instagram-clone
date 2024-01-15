
import { Link } from 'react-router-dom';
import { Avatar } from "flowbite-react";
import { useSelector } from 'react-redux';

function TopUser() {

  const { currentUser } = useSelector(state => state.user)

  return (
    <div className="realtive w-full">
     <div className='flex flex-col'>
       {/*  */}
       <div className="flex justify-between ">
       
        <div className='w-[60%] flex gap-4 overflow-x-scroll scrollbar-none pl-6 pt-4'>
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

          <div className='cursor-pointer w-14'>
          <img src='https://i.pravatar.cc/150?img=8' alt='image-1' className='w-14 h-14 rounded-full border-2 p-[1.5px] border-red-500 hover:scale-110 transition-transform duration-200 ease-aut'/>
          <h2 className='truncate text-center text-xs'>Ibrahim Ahmed</h2>
          </div>

          <div className='cursor-pointer w-14'>
          <img src='https://i.pravatar.cc/150?img=8' alt='image-1' className='w-14 h-14 rounded-full border-2 p-[1.5px] border-red-500 hover:scale-110 transition-transform duration-200 ease-aut'/>
          <h2 className='truncate text-center text-xs'>Ibrahim Ahmed</h2>
          </div>
        </div>
        <div className='flex pt-2 w-[25%]'>
          
        <Link to="/profile" className="flex space-x-4">
            <Avatar
            alt="user"
             img={currentUser.profile} 
             rounded
            />
             <span className="text-[14px] pt-8   font-extrabold text-white">
              {currentUser.username}
             </span>
          </Link>
        </div>
       </div>
       {/*  */}
       {/*  */}
     </div>
   </div>
  )
}

export default TopUser