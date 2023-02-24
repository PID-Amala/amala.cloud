import React from 'react'
import { Link } from 'react-router-dom'
import FormInput from '../../components/reusables/FormInput'
import { LoadingButton } from '../../components/reusables/LoadingButton'
import logo from '../../assets/icons/amala.svg'
import user from '../../assets/icons/user.svg'


const ForgotPassword = () => {
  return (
    <div className='paddingX pt-4 pb-32'>
      <Link to='/'><img src={logo} alt="amala logo" className='w-[134px]'/></Link>
      <div className='flex flex-col items-center pt-[100px] md:pt-0'>
        <img src={user} alt="user" />
        <h1 className='h1'>Forgot Password?</h1>
        <p className='w-[200px] md:w-[344px] text-center my-4 leading-none'>
          Kindly enter your registered email address so we can send reset instructions.
        </p>
        <form action="">
          <FormInput label='Email' name='email'/>
          <LoadingButton
            loading={false}
          >
            Send
          </LoadingButton>
          <div className='w-fit mx-auto mt-2'>Back to <Link to='/login' className='text-primary font-bold'>Login</Link></div>
        </form>
      </div>
    </div>
  )
}

export default ForgotPassword