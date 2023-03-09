import React from 'react'
import { Routes, Route } from 'react-router-dom'
import EmailVerification from './auth/EmailVerification'
import Register from './auth/Register'
import RegisterContinue from './auth/RegisterContinue'
import SignUp from './auth/SignUp'
import PageNotFound from '../home/PageNotFound'
import Login from './auth/Login'
import IndividualDashboardLayout from '../../layout/IndividualDashboardLayout'
import Profile from './dashboard/Profile'
import Address from './dashboard/Address'
import DataManagement from './dashboard/DataManagement'
import Settings from './dashboard/Settings'
import Dashboard from './dashboard/Dashboard'

const Index = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<IndividualDashboardLayout />}>
          {/* <Route index element={<Home />} /> */}
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="profile" element={<Profile />} />
          <Route path="address" element={<Address />} />
          <Route path="data-management" element={<DataManagement />} />
          <Route path="settings" element={<Settings />} />
        </Route>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<SignUp/>}/>
        <Route path='/signup/verification' element={<EmailVerification/>} />
        <Route path='/signup/register' element={<Register/>} />
        <Route path='/signup/register/continue' element={<RegisterContinue/>} />
        <Route path='*' element={<PageNotFound/>} />
      </Routes>
    </div>
  )
}

export default Index