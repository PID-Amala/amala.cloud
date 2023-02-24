import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import FormInput from '../../../components/reusables/FormInput'
import { LoadingButton } from '../../../components/reusables/LoadingButton'
import logo from '../../../assets/icons/amala.svg'
import user from '../../../assets/icons/user.svg'
import TermsConditions from '../../home/TermsConditions'


const RegisterContinue = () => {
  const [isChecked, setIsChecked] = useState(false);
  const [isTerm, setIsTerm] = useState(false);

  return (
    <div className='paddingX pt-4 pb-32'>
      <Link to='/'><img src={logo} alt="amala logo" className='w-[134px]'/></Link>
      <div className='flex flex-col items-center pt-[100px] md:pt-0'>
        <img src={user} alt="user" />
        <h1 className='text-[23px] md:text-[36px] font-bold leading-8 max-w-[533px] text-center'>You're almost done.</h1>
        <form action="" className='mt-8 mb-12'>
          <FormInput label='Post Code' name='postCode' variant='short'/>
          <div className='text-primary text-[12px] mt-[-10px] mb-4'><Link to=''>Check your Post Code here</Link></div>
          <div className='flex gap-8'>
            <FormInput label='State' name='state' variant='short'/>
            <FormInput label='LGA' name='lga' variant='short'/>
          </div>
          <FormInput label='City' name='city' variant='short'/>
          <FormInput label='Address' name='address'/>
          <input
            className='mr-3 mb-10'
            type="checkbox"
            checked={isChecked}
            onChange={()=> {setIsChecked(!isChecked); console.log(isChecked)}}
          /> 
          <label className='text-[12px] text-primary' htmlFor='term' onClick={()=> setIsTerm(true)}><Link to=''>Accept our terms and conditions</Link></label>
          
          <LoadingButton
            loading={false}
            disabled={true}
          >
            Submit
          </LoadingButton>
        </form>
        {isTerm && (
          <TermsConditions
            setIsTerm = {setIsTerm}
          />
        )}
      </div>
    </div>
  )
}

export default RegisterContinue