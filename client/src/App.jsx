import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Dashborad from './pages/Dashborad'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import Header from './components/Header'
import Profile from './pages/Profile'
import Post from './pages/Post'
import Follow from './pages/Follow'

function App() {
  

  return (
    <>
      <BrowserRouter>
      <div className='flex bg-[#191919]'>
      <Header/>
       <Routes>
        <Route path='/dashborad' element={<Dashborad/>} />
        <Route path='/signin' element={<SignIn/>} />
        <Route path='/signup' element={<SignUp/>} />
        <Route path='/profile' element={<Profile/>} />
        <Route path='/profile' element={<Post/>} />
        <Route path='/follow' element={<Follow/>} />
       </Routes>
       </div>
      </BrowserRouter>
    </>
  )
}

export default App
