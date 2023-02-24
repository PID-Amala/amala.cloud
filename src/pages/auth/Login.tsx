import React from 'react'
import { Link } from 'react-router-dom'
import FormInput from '../../components/reusables/FormInput'
import { LoadingButton } from '../../components/reusables/LoadingButton'
import logo from '../../assets/icons/amala.svg'
import user from '../../assets/icons/user.svg'

const Login = () => {
  return (
    <div className='paddingX pt-4 pb-32'>
      <Link to='/'><img src={logo} alt="amala logo" className='w-[134px]'/></Link>
      <div className='flex flex-col items-center pt-[100px] md:pt-0'>
        <img src={user} alt="user" />
        <h1 className='h1'>Login</h1>
        <form>
          <FormInput label='Email' name='email'/>
          <FormInput label='Password' name='password' type='password'/>
          <div className='text-primary mt-[-10px] mb-4 flex justify-end'><Link to='forgotpassword' className='text-[14px] text-primary font-semibold hover:text-secondary'>Forgot Password?</Link></div>
          <LoadingButton
            loading={false}
          >
            Login
          </LoadingButton>
          <div className='mt-4 flex justify-center'>New member? <Link  to='/signup' className='text-primary font-semibold hover:text-secondary'> Sign up now</Link></div>
        </form>
        
        

      </div>
    </div>
  )
}

export default Login