import React, {useEffect} from 'react'
// Zod - A typescript-first schema validation library.
import { object, string, TypeOf } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, FormProvider, SubmitHandler } from "react-hook-form";
import FormInput from '../../components/reusables/FormInput'
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import { authApi } from "../../api/authApi";
import { GenericResponse } from "../../api/types";
import useStore from "../../store";
import { LoadingButton } from '../../components/reusables/LoadingButton'
import logo from '../../assets/icons/amala.svg'
import user from '../../assets/icons/user.svg'


//type definition with error messages for the form input
const forgotPasswordSchema = object({
  email: string()
    .min(1, "Email address is required")
    .email("Email Address is invalid"),
});

//type definition for form
export type forgotPasswordInput = TypeOf<typeof forgotPasswordSchema>;

const ForgotPassword = () => {

  const store = useStore();
  const navigate = useNavigate();
  const methods = useForm<forgotPasswordInput>({
    resolver: zodResolver(forgotPasswordSchema),
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
      reset();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSubmitSuccessful]);

  const getUser = async (data: forgotPasswordInput) => {
    try {
      //set button loading to true
      store.setRequestLoading(true);
      //post input datas to database
      const response = await authApi.post<GenericResponse>(
        "/auth/register",
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
  const onSubmitHandler: SubmitHandler<forgotPasswordInput> = (values) => {
    console.log("I was called");
    navigate('resetpassword')
    getUser(values);
  };

  return (
    <div className='paddingX pt-4 pb-32'>
      <Link to='/'><img src={logo} alt="amala logo" className='w-[134px]'/></Link>
      <div className='flex flex-col items-center pt-[100px] md:pt-0'>
        <img src={user} alt="user" />
        <h1 className='h1'>Forgot Password?</h1>
        <p className='w-[200px] md:w-[344px] text-center my-4 leading-none'>
          Kindly enter your registered email address so we can send reset instructions.
        </p>
        <FormProvider {...methods}>
          <form 
            onSubmit={handleSubmit(onSubmitHandler)}
          >
          <FormInput label='Email' name='email'/>
            <LoadingButton
              loading={store.requestLoading}
            >
              Send
            </LoadingButton>
            <div className='w-fit mx-auto mt-2'>Back to <Link to='/login' className='text-primary font-bold'>Login</Link></div>
          </form> 
        </FormProvider>
      </div>
    </div>
  )
}

export default ForgotPassword