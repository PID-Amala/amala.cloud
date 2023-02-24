import React from 'react'
import { Link } from 'react-router-dom'
import FormInput from '../../../components/reusables/FormInput'
import { LoadingButton } from '../../../components/reusables/LoadingButton'
import logo from '../../../assets/icons/amala.svg'
import user from '../../../assets/icons/user.svg'

const Register = () => {
  return (
    <div className='paddingX pt-4 pb-32'>
      <Link to='/'><img src={logo} alt="amala logo" className='w-[134px]'/></Link>
      <div className='flex flex-col items-center pt-[100px]'>
        <img src={user} alt="user" />
        <h1 className='h1'> Personal details</h1>
        <p className='text-primary w-[200px] md:w-[344px] text-center mt-4 leading-none'>Kindly provide the following information to complete your sign up</p>
        
          <form className='mt-8'>
            <FormInput label='First Name' name='firstName' />
            <FormInput label='Last Name' name='lastName'/>
            <FormInput label='Date of Birth' name='dateOfBirth' placeholder='DD / MM / YYYY'/>
            <FormInput label='Phone Number' name='phoneNumber'/>
            <FormInput label='VNIN' name='vnin'/>
            <div className='text-primary text-[12px] mt-[-10px]'><Link to=''>Check for VNIN here</Link></div>
            <div className='mt-8 mb-10'>
              <Link to='/individual/signup/register/continue'><LoadingButton
              loading={false}
              >
                Continue
              </LoadingButton></Link>
            </div>
          </form>
        
      </div>
    </div>
  )
}

export default Register