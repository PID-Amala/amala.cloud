import React from 'react'
import { Routes, Route } from 'react-router-dom'
import EmailVerification from './auth/EmailVerification'
import Login from './auth/Login'
import Register from './auth/Register'
import RegisterContinue from './auth/RegisterContinue'
import SignUp from './auth/SignUp'
import PageNotFound from '../home/PageNotFound'
import ForgotPassword from './auth/ForgotPassword'

const Index = () => {
  return (
    <div>
      <Routes>
        <Route path='/signup' element={<SignUp/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup/verification' element={<EmailVerification/>} />
        <Route path='/signup/register' element={<Register/>} />
        <Route path='/signup/register/continue' element={<RegisterContinue/>} />
        <Route path='/login/forgotpassword' element={<ForgotPassword/>} />
        <Route path='*' element={<PageNotFound/>} />
      </Routes>
    </div>
  )
}

export default Index