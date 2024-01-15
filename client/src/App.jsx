import { BrowserRouter,  Routes, Route} from 'react-router-dom'
import Dashborad from './pages/Dashborad'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import Profile from './pages/Profile'
import Post from './pages/Post'
import Follow from './pages/Follow'
import PrivateRoute from './components/PrivateRoute'

function App() {
  

  return (
    <>
      <BrowserRouter>
      <div className='flex bg-[#000]'>
        
       <Routes>
         
         <Route element={<PrivateRoute/>} >
         <Route path='/dashborad' element={<Dashborad/>} />
         </Route>
        
        <Route path='/profile' element={<Profile/>} />
        <Route path='/profile' element={<Post/>} />
        <Route path='/follow' element={<Follow/>} />
        <Route path='/signin' element={<SignIn/>} />
        <Route path='/' element={<SignUp/>} />
        
       </Routes>
       </div>
      </BrowserRouter>
    
    
    </>
  )
}

export default App
