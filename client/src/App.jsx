import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Dashborad from './pages/Dashborad'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'

function App() {
  

  return (
    <>
      <BrowserRouter>
       <Routes>
        <Route path='/' element={<Dashborad/>} />
        <Route path='/signin' element={<SignIn/>} />
        <Route path='/signup' element={<SignUp/>} />
       </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
