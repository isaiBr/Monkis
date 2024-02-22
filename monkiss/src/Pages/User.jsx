import React, { useContext } from 'react'
import { Navbar } from '../Components/Navbar'
import { Outlet } from 'react-router-dom'
import '../assets/Styles/Pages/User.css'
import { Header } from '../Components/Header'
import { userContext } from '../Context/userContext'

function User() {

  const {
    short
  }= useContext(userContext);

  return (
    <div className='main-box--userview'>
        <Navbar/>
        <div className={`userview-content ${short?'mini-content':''}`}>
          <Header titulo={'MONKI FAMILIA'}/>
          <Outlet/>
        </div>
    </div>
  )
}

export {User}