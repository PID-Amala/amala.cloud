import React, {useState, useEffect} from 'react'
// Zod - A typescript-first schema validation library.
import { object, string, TypeOf } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, FormProvider, SubmitHandler } from "react-hook-form";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import { authApi } from "../../../api/authApi";
import { ILoginResponse } from "../../../api/types";
import useStore from "../../../store";
import FormInput from '../../../components/reusables/FormInput'
import { LoadingButton } from '../../../components/reusables/LoadingButton'
import logo from '../../../assets/icons/amala.svg'
import user from '../../../assets/icons/user.svg'
import eye from '../../../assets/icons/eye.svg'
import hide from '../../../assets/icons/hide.svg'

//type definition with error messages for the form input
const loginSchema = object({
  email: string()
    .min(1, "Email address is required")
    .email("Email Address is invalid"),
  password: string()
    .min(1, "Password is required")
    .min(8, "Password must be more than 8 characters")
    .max(32, "Password must be less than 32 characters"),
});

//type definition for login form
export type LoginInput = TypeOf<typeof loginSchema>;

const Login = () => {
  const [passwordShown, setPasswordShown] = useState(false)

  const store = useStore();
  const navigate = useNavigate();

  const methods = useForm<LoginInput>({
    resolver: zodResolver(loginSchema),
  });
//useForm() destructuring or methods destructuring . Here methods = useForm()
  const {
    reset,
    handleSubmit,
    formState: { isSubmitSuccessful },
  } = methods;

 //if form submission is successful reset form input values
  useEffect(() => {
    if (isSubmitSuccessful) {
      // reset();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSubmitSuccessful]);

  const loginUser = async (data: LoginInput) => {
    try {
      store.setRequestLoading(true);
      await authApi.post<ILoginResponse>("/auth/login", data);
      store.setRequestLoading(false);
      navigate("/profile");
    } catch (error: any) {
      store.setRequestLoading(false);
      const resMessage =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      toast.error(resMessage, {
        position: "top-right",
      });
    }
  };

  //onsubmit run loginUser function with the values collected from the form which is used as data in login User
  const onSubmitHandler: SubmitHandler<LoginInput> = (values) => {
    navigate('/individual/dashboard')
    loginUser(values);
  };

  return (
    <div className='paddingX pt-4 pb-32'>
      <Link to='/'><img src={logo} alt="amala logo" className='w-[134px]'/></Link>
      <div className='flex flex-col items-center pt-[100px] md:pt-0'>
        <img src={user} alt="user" />
        <h1 className='h1'>Login</h1>
        <FormProvider {...methods}>
          <form
            onSubmit={handleSubmit(onSubmitHandler)}
          >
            <FormInput label='Email' name='email'/>
            <div className='flex'>
              <FormInput label='Password' name='password' type={passwordShown ? 'text' : 'password'}/>
              <img src={passwordShown ? hide : eye} alt="show password" className='relative top-9 right-8 hover:cursor-pointer w-[20px] h-5' onClick={()=> setPasswordShown(!passwordShown)}/>
            </div>
            <div className='text-primary mt-[-5px] mb-4 flex justify-end'><Link to='/login/forgotpassword' className='text-[14px] text-primary font-semibold hover:text-secondary'>Forgot Password?</Link></div>
            <LoadingButton
              loading={store.requestLoading}
            >
              Login
            </LoadingButton>
            <div className='mt-4 flex justify-center'>New member? <Link  to='/signup' className='text-primary font-semibold hover:text-secondary'> Sign up now</Link></div>
          </form>
        </FormProvider>
      </div>
    </div>
  )
}

export default Login