import { useContext, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import { Login } from './Pages/Login'
import { Home } from './Pages/Home'
import { Planner } from './Pages/Planner'
import { Famliy } from './Pages/Famliy'
import { Users } from './Pages/Users'
import { ProtectedRoute } from './Components/ProtectedRoute'
import { userContext } from './Context/userContext'
import { Navbar } from './Components/Navbar'
import {User} from './Pages/User'

function App() {

  const {
    user
  }= useContext(userContext);

  return (
    <div className='mainbox-app'>
      <Routes>
        <Route path='/' element={<Login/>}/>

        {/* Seccion usuario normal*/}
        <Route element={<ProtectedRoute isAllowed={!!user&&user.roles.includes('user')}/>}>
          <Route path='/user/' element={<User/>}>
            <Route path='home' element={<Home/>}/>
            <Route path='planner' element={<Planner/>}/>
            <Route path='family' element={<Famliy/>}/>
            <Route path='users' element={<Users/>}/>
          </Route>
        </Route>

        <Route path='/*' element={<h1>NOT FOUND</h1>}/>
      </Routes>
    </div>
    
  )
}

export default App
