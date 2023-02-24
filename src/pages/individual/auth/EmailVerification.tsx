import React from 'react'
// Zod - A typescript-first schema validation library.
import { object, string, TypeOf } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, FormProvider, SubmitHandler } from "react-hook-form";
import FormInput from '../../../components/reusables/FormInput'
import { LoadingButton } from '../../../components/reusables/LoadingButton';
import { Link } from 'react-router-dom';
import logo from '../../../assets/icons/amala.svg'
import check from '../../../assets/icons/Check.svg'
import user from '../../../assets/icons/user.svg'


//type definition with error messages for the form input
const emailVerificationSchema = object({
  verificationCode: string().min(1, "Email verifciation code is required"),
});

//type definition for form
export type EmailVerificationInput = TypeOf<typeof emailVerificationSchema>;


const EmailVerification = () => {
  const methods = useForm<EmailVerificationInput>({
    resolver: zodResolver(emailVerificationSchema),
  });
  //useForm() destructuring or methods destructuring . Here methods = useForm()
  const {
    reset,
    handleSubmit,
    setValue,
    formState: { isSubmitSuccessful },
  } = methods;

  return (
    <div className='paddingX pt-4'>
      <Link to='/'><img src={logo} alt="amala logo" className='w-[134px]'/></Link>
      <div className='flex flex-col items-center pt-[60px] md:pt-0'>
        <img src={user} alt="user" />
        <h1 className='h1'>Email verification</h1>
        <p className='max-w-[293px] text-center leading-tight'>Please check your Email, We’ve you sent a mail for verification  </p>
        <img src={check} alt="check"/>
          <form className=''>
            <FormInput label='Verification Code' name='verificationCode' />
            <Link to='register'><LoadingButton
              loading={false}
            >
              Verify
            </LoadingButton></Link>
          </form>
        
      </div>
    </div>
  )
}

export default EmailVerification