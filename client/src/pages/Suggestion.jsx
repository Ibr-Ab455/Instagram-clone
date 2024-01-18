// eslint-disable-next-line no-unused-vars
import React from 'react'

function Suggestion() {
  return (
    <div>
     <div className='hidden md:inline-grid md:col-span-1'>
        <div className="fixed w-[380px]">
         {/* mini profile */}
          <div className="flex items-center justify-between mt-14 ml-10">
            <img
              src="https://static.skillshare.com/uploads/users/350301760/user-image-large.jpg?753816048"
              alt="user-image"
              className="h-16 rounded-full border p-[2px]"
            />
            <div className="flex-1 ml-4">
              <h2 className="font-bold">Ibrahim_Ah</h2>
              <h3 className="text-sm text-gray-400">Welcome to instagram</h3>
            </div>
            <button className="font-semibold text-blue-400 text-sm">
              Sign out
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