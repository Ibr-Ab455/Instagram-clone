import { BrowserRouter as Router,  Routes, Route} from 'react-router-dom'

import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import PrivateRoute from './components/PrivateRoute'
import Dashboard from './pages/Dashboard'
import Profile from './pages/Profile'

function App() {
  

  return (
    <>
      <Router>
      
        <Routes>
           
          <Route element={<PrivateRoute/>} >
          <Route path='/' element={<Dashboard/>}/>
         </Route>
        
        
         <Route path='/signin' element={<SignIn/>} />
         <Route path='/signup' element={<SignUp/>} />
        
       
        <Route path='/profile'  element={<Profile/>} />
        
        </Routes>

       </Router>
      
    
    
    </>
  )
}

export default App
