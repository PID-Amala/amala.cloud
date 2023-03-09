import React from 'react'
import user from '../../assets/icons/user.svg'
import logo from '../../assets/icons/amala.svg'
import { Button } from '../../components/reusables/Button'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div className='paddingX pt-4'>
      <Link to='/'><img src={logo} alt="amala logo" className='w-[134px]'/></Link>
      <div className='flex flex-col items-center pt-[100px]'>
        <img src={user} alt="user" />
        <h1 className='h1 mb-8'>Login</h1>
        <div className='w-[225px] mb-4'><Link to='/individual/login'><Button fullWidth>As an individual</Button></Link></div>
        <div className='w-[225px]'><Link to='/provider/login'><Button fullWidth>As a Service Provider</Button></Link></div>
      </div>
    </div>
  )
}

export default Login