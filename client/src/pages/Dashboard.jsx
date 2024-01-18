// eslint-disable-next-line no-unused-vars
import React from 'react'
import TopUser from './TopUser'
import Suggestion from './Suggestion'
import Post from './Post'
import Navbar from '../components/Navbar'


function Dashboard() {
  return (
    <div>
      <Navbar/>
       
        <div>
      
        <div className='grid grid-cols-1 md:grid-cols-3 p-2 max-w-5xl mx-auto'>
            <div className='col-span-2'>
            <TopUser/>
            <Post/>
            </div>

            <div className='invisible md:visible'>
             <Suggestion/>
            </div>
        </div>
        </div>
    
    </div>
  )
}

export default Dashboard