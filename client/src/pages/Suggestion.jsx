// eslint-disable-next-line no-unused-vars
import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { signoutSucess } from '../redux/api/UserSlice'
import { useDispatch } from 'react-redux'

function Suggestion() {

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
    <div>
     <div className='hidden md:inline-grid md:col-span-1'>
        <div className="fixed w-[380px]">
         {/* mini profile */}
          <div className="flex items-center justify-between mt-14 ml-10">
            <Link to="/profile">
            <img src={currentUser.profile}
              alt="user-image"
              className="h-16 rounded-full border p-[2px] cursor-pointer"
            />
            </Link>
           
            <div className="flex-1 ml-4">
              <Link to="/profile">
              <h2 className="font-bold cursor-pointer">{currentUser.username}</h2>
              </Link>
             
              <h3 className="text-sm text-gray-400">Welcome to instagram</h3>
            </div>
            
            <button onClick={handleSignout} className="font-semibold text-blue-400 text-sm">
              Logg ut
            </button>
          
          </div>

           <div className='pt-6 ml-10'>
            
             <div className='flex justify-between mb-5 text-sm'>
             <h3 className="font-bold text-gray-400">Suggestions for you</h3>
             <button className="text-gray-600 font-semibold">See all</button>
             </div>
            
             <div className="flex items-center justify-between mt-4">
              <img className="h-10 border rounded-full p-[2px]" src="https://i.pravatar.cc/150?img=17" alt="user-image" />
              <div className="flex-1 ml-4">
                <h2 className="font-semibold text-sm">john26375</h2>
                <h3 className="text-sm text-gray-400">Manager</h3>
              </div>
              <button className="font-semibold text-blue-400 text-sm">Follow</button>
            </div>

            <div className="flex items-center justify-between mt-4">
              <img className="h-10 border rounded-full p-[2px]" src="https://i.pravatar.cc/150?img=17" alt="user-image" />
              <div className="flex-1 ml-4">
                <h2 className="font-semibold text-sm">john26375</h2>
                <h3 className="text-sm text-gray-400">Manager</h3>
              </div>
              <button className="font-semibold text-blue-400 text-sm">Follow</button>
            </div>

            <div className="flex items-center justify-between mt-4">
              <img className="h-10 border rounded-full p-[2px]" src="https://i.pravatar.cc/150?img=17" alt="user-image" />
              <div className="flex-1 ml-4">
                <h2 className="font-semibold text-sm">john26375</h2>
                <h3 className="text-sm text-gray-400">Manager</h3>
              </div>
              <button className="font-semibold text-blue-400 text-sm">Follow</button>
            </div>

            <div className="flex items-center justify-between mt-4">
              <img className="h-10 border rounded-full p-[2px]" src="https://i.pravatar.cc/150?img=18" alt="user-image"  />
              <div className="flex-1 ml-4">
                <h2 className="font-semibold text-sm">john26375</h2>
                <h3 className="text-sm text-gray-400">Manager</h3>
              </div>
              <button className="font-semibold text-blue-400 text-sm">Follow</button>
            </div>

                  
           </div>
          
          </div>
        </div>
      </div>
   
    
  )
}

export default Suggestion