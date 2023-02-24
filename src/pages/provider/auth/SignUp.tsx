import React, {useState} from 'react'
// Zod - A typescript-first schema validation library.
import { object, string, TypeOf } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, FormProvider, SubmitHandler } from "react-hook-form";
import FormInput from '../../../components/reusables/FormInput'
import { LoadingButton } from '../../../components/reusables/LoadingButton';
import { Link } from 'react-router-dom';
import logo from '../../../assets/icons/amala.svg'
import user from '../../../assets/icons/user.svg'
import eye from '../../../assets/icons/eye.svg'

//type definition with error messages for the form input
const registerSchema = object({
  email: string()
    .min(1, "Email address is required")
    .email("Email Address is invalid"),
  password: string()
    .min(1, "Password is required")
    .min(8, "Password must be more than 8 characters")
    .max(32, "Password must be less than 32 characters"), 
});

//type definition for form
export type RegisterInput = TypeOf<typeof registerSchema>;

const SignUp = () => {
  const [passwordShown, setPasswordShown] = useState(false);

  const methods = useForm<RegisterInput>({
    resolver: zodResolver(registerSchema),
  });
  //useForm() destructuring or methods destructuring . Here methods = useForm()
  const {
    reset,
    handleSubmit,
    formState: { isSubmitSuccessful },
  } = methods;

  return (
    <div className='paddingX pt-4 pb-32'>
      <Link to='/'><img src={logo} alt="amala logo" className='w-[134px]'/></Link>
      <div className='flex flex-col items-center pt-[100px] md:pt-0'>
        <img src={user} alt="user" />
        <h1 className='h1'>Sign Up as Service Provider</h1>
        <p>Start your sign up process here</p>
        
          <form className='mt-8'>
            <FormInput label='Company Name' name='companyName' />
            <FormInput label='Company Mail' name='companyMail' />
            <FormInput label='Company Phone Number' name='companyPhoneNumber' />
            <FormInput label='Company Category' name='companyCategory' />
            <FormInput label='Password' name='password' type={passwordShown ? "text" : "password"} />
            <img src={eye} alt="show password" className='relative bottom-11 left-[260px] md:left-[350px] hover:cursor-pointer' onClick={()=> setPasswordShown(!passwordShown)}/>
            <LoadingButton
              loading={false}
            >
              Sign Up
            </LoadingButton>
            <p className='mt-4 w-fit mx-auto'>Already a member? <Link to='/login'><span className="text-primary font-semibold hover:text-secondary">Login</span></Link></p>
          </form>
        
      </div>
    </div>
  )
}

export default SignUp