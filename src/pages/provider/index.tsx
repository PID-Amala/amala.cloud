import React from 'react'
import { Routes, Route } from 'react-router-dom'
import SignUp from './auth/SignUp'
import PageNotFound from '../home/PageNotFoundColored'
import EmailVerification from './auth/EmailVerification'
import Login from './auth/Login'

const Index = () => {
  return (
    <div>
      <Routes>
        
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<SignUp/>}/>
        <Route path='/signup/verification' element={<EmailVerification/>}/>
        <Route path='*' element={<PageNotFound/>} />
      </Routes>
    </div>
  )
}

export default Index