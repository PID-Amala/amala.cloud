import React from 'react'
import { Routes, Route } from 'react-router-dom'
import SignUp from './auth/SignUp'
import PageNotFound from '../home/PageNotFoundColored'

const Index = () => {
  return (
    <div>
      <Routes>
        <Route path='/signup' element={<SignUp/>}/>
        <Route path='*' element={<PageNotFound/>} />
      </Routes>
    </div>
  )
}

export default Index