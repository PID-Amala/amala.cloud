import React, {useState, useEffect} from 'react'
// Zod - A typescript-first schema validation library.
import { object, string, TypeOf } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, FormProvider, SubmitHandler } from "react-hook-form";
import FormInput from '../../../components/reusables/FormInput'
import { LoadingButton } from '../../../components/reusables/LoadingButton';
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import { authApi } from "../../../api/authApi";
import { GenericResponse } from "../../../api/types";
import useStore from "../../../store";
import logo from '../../../assets/icons/amala.svg'
import user from '../../../assets/icons/user.svg'
import eye from '../../../assets/icons/eye.svg'
import hide from '../../../assets/icons/hide.svg'

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
export type SignupInput = TypeOf<typeof registerSchema>;

const SignUp = () => {
  const [passwordShown, setPasswordShown] = useState(false);

  const store = useStore();
  const navigate = useNavigate();
  const methods = useForm<SignupInput>({
    resolver: zodResolver(registerSchema),
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

  const registerUser = async (data: SignupInput) => {
    try {
      //set button loading to true
      store.setRequestLoading(true);
      //post input datas to database
      const response = await authApi.post<GenericResponse>(
        "/new",
        data
      );
      store.setRequestLoading(false);
      //Form submition success notifications
      toast.success(response.data.message as string, {
        position: "top-right",
      });
      //navigate to verification page after submition
      navigate("/signup/verification");
    } catch (error: any) {
      store.setRequestLoading(false);
      const resMessage =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      //Form submition error notifications
      toast.error(resMessage, {
        position: "top-right",
      });
    }
  };

  //onsubmit run register function with the values collected from the form which is used as data in registerUser
  const onSubmitHandler: SubmitHandler<SignupInput> = (values) => {
    console.log("I was called");
    navigate("verification");
    registerUser(values);
  };

  return (
    <div className='paddingX pt-4 pb-32'>
      <Link to='/'><img src={logo} alt="amala logo" className='w-[134px]'/></Link>
      <div className='flex flex-col items-center pt-[100px] md:pt-0'>
        <img src={user} alt="user" />
        <h1 className='h1'>Welcome to Amala</h1>
        <p>Start your sign up process here</p>
        <FormProvider {...methods}>
          <form className='mt-8'
            onSubmit={handleSubmit(onSubmitHandler)}
          >
            <FormInput label='Email' name='email' />
            <div className='flex'>
              <FormInput label='Password' name='password' type={passwordShown ? "text" : "password"}  />
              <img src={passwordShown? hide : eye} alt="show password" className='relative top-9 right-8 hover:cursor-pointer w-[20px] h-5' onClick={()=> setPasswordShown(!passwordShown)}/>
            </div>
            <LoadingButton
              loading={store.requestLoading}
            >
              Sign Up
            </LoadingButton>
            <p className='mt-4 w-fit mx-auto'>Already a member? <Link to='/login'><span className="text-primary font-semibold hover:text-secondary">Login</span></Link></p>
          </form>
        </FormProvider>
      </div>
    </div>
  )
}

export default SignUp