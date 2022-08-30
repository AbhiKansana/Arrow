import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Home from './Home'
import TimerPage from './TimerPage'
import Login from './Login'
import Signup from './Signup'
import Diary from './Diary'
import Room from './Room'

const AllRoutes = () => {
  return (
    <div>
        <Navbar />
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/timer' element={<TimerPage />} />
            <Route path='/login' element={<Login/>} />
            <Route path='/signup' element={<Signup />} />
            <Route path='/diary' element={<Diary />} />
            <Route path='/room-chat' element={<Room />} />

        </Routes>

    </div>
  )
}

export default AllRoutes