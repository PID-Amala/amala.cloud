import React from 'react'
import HeaderColored from '../../components/reusables/HeaderColored'
import user from '../../assets/icons/user.svg'
import fatalError from '../../assets/images/Fatal_error.png'

const PageNotFoundColored = () => {
  return (
    <div className='bg-secondary'>
      <HeaderColored/>
      <div className='flex flex-col items-center pt-[100px] md:pt-0'>
        <img src={user} alt="user" />
        <h1 className='text-[23px] md:text-[36px] font-bold leading-8 max-w-[533px] text-center'>The page you are looking for doesn’t exist</h1>
        <img src={fatalError} alt="page not found" />
      </div>
    </div>
  )
}

export default PageNotFoundColored