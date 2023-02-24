import React from 'react'
import user from '../../assets/icons/user.svg'
import logo from '../../assets/icons/amala.svg'
import { Button } from '../../components/reusables/Button'
import { Link } from 'react-router-dom'

const SignUp = () => {
  return (
    <div className='paddingX pt-4'>
      <Link to='/'><img src={logo} alt="amala logo" className='w-[134px]'/></Link>
      <div className='flex flex-col items-center pt-[100px]'>
        <img src={user} alt="user" />
        <Link to='/individual/signup'><div className='w-[225px]'><Button fullWidth>As an individual</Button></div></Link>
        <Link to='/provider/signup'><div className='w-[225px]'><Button fullWidth>As a Service Provider</Button></div></Link>
      </div>
      
    </div>
  )
}

export default SignUp