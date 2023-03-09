import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/icons/amala.svg'
import user from '../../assets/icons/user.svg'
import check from '../../assets/icons/Check.svg'
import { Button } from '../../components/reusables/Button'


const PasswordReset = () => {
  return (
    <div className='paddingX pt-4 pb-32'>
      <Link to='/'><img src={logo} alt="amala logo" className='w-[134px]'/></Link>
      <div className='flex flex-col items-center pt-[100px] md:pt-0'>
        <img src={user} alt="user" />
        <h1 className='h1 mb-2'>Congratulations</h1>
        <p className='w-[200px] md:w-[310px] text-center leading-none'>
          Your Password has been reset.
        </p>
        <img src={check} alt="check"/>
        <div className='btn'><Button fullWidth><Link to='/login'>Login</Link></Button></div>
      </div>
    </div>
  )
}

export default PasswordReset