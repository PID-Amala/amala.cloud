import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/icons/amala.svg'
import user from '../../assets/icons/user.svg'
import check from '../../assets/icons/Check.svg'


const ForgotPassInst = () => {
  return (
    <div className='paddingX pt-4 pb-32'>
      <Link to='/'><img src={logo} alt="amala logo" className='w-[134px]'/></Link>
      <div className='flex flex-col items-center pt-[100px] md:pt-0'>
        <img src={user} alt="user" />
        <h1 className='h1 mb-2'>Password Reset</h1>
        <p className='w-[200px] md:w-[310px] text-center leading-none'>
          Please check your Email, We’ve you sent a mail to reset your password 
        </p>
        <img src={check} alt="check"/>
      </div>
    </div>
  )
}

export default ForgotPassInst