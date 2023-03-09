import React, {useState, useEffect} from 'react'
// Zod - A typescript-first schema validation library.
import { object, string, TypeOf} from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, FormProvider, SubmitHandler } from "react-hook-form";
import FormInput from '../../../components/reusables/FormInput'
import { LoadingButton } from '../../../components/reusables/LoadingButton'
import { Button } from '../../../components/reusables/Button'
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import { authApi } from "../../../api/authApi";
import { GenericResponse } from "../../../api/types";
import useStore from "../../../store";
import logo from '../../../assets/icons/amala.svg'
import user from '../../../assets/icons/user.svg'
import close from '../../../assets/icons/close.svg'

//type definition with error messages for the form input
const registerSchema = object({
  firstName: string().min(1, "First name is required").max(50),
  lastName: string().min(1, "First name is required").max(50),
  dateOfBirth: string()
  .min(1, "Date of birth is required" )
  .min(9, "Enter a valide date of birth" ).max(10)
  .regex(/^(0[1-9]|[1-2][0-9]|3[0-1])\/(0[1-9]|1[0-2])\/\d{4}$/, "Enter your dob in this format dd/mm/yyyy"),
  phoneNumber: string()
  .min(1, "Phone number is required - numbers only")
  .max(11, "Phone number must not be more than 11 digits")
  .regex(/^([0-9]{11})$/, "Phone number must be 11 digits"),
  gender: string().min(1, "First name is required").max(7),
  nationality: string().min(1, "First name is required").max(20),
  vnin: string()
  .min(1, "VNIN is required - numbers only")
  .max(16, "VNIN must not be more than 16 digits")
  .regex(/^([0-9]{16})$/, "VNIN must be 16 digits"),
});
//type definition for form
export type SignupInput = TypeOf<typeof registerSchema>;

const Register = () => {
  const [isVerify, setIsVerify] = useState(false);

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
      //reset();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSubmitSuccessful]);

  
  const registerUser = async (data: SignupInput) => {
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
  const onSubmitHandler: SubmitHandler<SignupInput> = (values) => {
    console.log(values);
    setIsVerify(true);
    registerUser(values);
    
  };

  return (
    <div className='paddingX pt-4 pb-32'>
      <Link to='/'><img src={logo} alt="amala logo" className='w-[134px]'/></Link>
      <div className='flex flex-col items-center pt-[100px]'>
        <img src={user} alt="user" />
        <h1 className='h1'> Personal details</h1>
        <p className='text-primary w-[200px] md:w-[344px] text-center mt-4 leading-none'>Kindly provide the following information to complete your sign up</p>
        <FormProvider {...methods}>
          <form className='mt-8'
            onSubmit={handleSubmit(onSubmitHandler)}
          >
            <FormInput label='First Name' name='firstName' />
            <FormInput label='Last Name' name='lastName'/>
            <FormInput label='Date of Birth' name='dateOfBirth' placeholder='DD / MM / YYYY'/>
            <FormInput label='Phone Number' name='phoneNumber' placeholder='08123456789'/>
            <FormInput label='Gender' name='gender' placeholder='female'/>
            <FormInput label='Nationality' name='nationality' placeholder='Nigerian'/>
            <FormInput label='VNIN' name='vnin' placeholder='4123456776543890'/>
            <div className='text-primary text-[12px] mt-[-10px]'><Link to=''>Check for VNIN here</Link></div>
            <div className='mt-8 mb-10'>
            <LoadingButton
              loading={store.requestLoading}
              >
                Continue
              </LoadingButton>
            </div>
          </form>
          </FormProvider>
          {isVerify && (
            <div className=" fixed top-0 left-0 right-0 bottom-0 bg-black-rgba flex items-center justify-center z-1">
              <div className="w-[330px] md:w-[400px] bg-primary p-[20px] rounded-[5px] flex flex-col items-center pb-10">
                <img className="w-[50px] ml-auto mb-4" src={close} alt="close" onClick={() => setIsVerify(false)} />
                <Link to= "/individual/signup/register/continue" className='btn mb-6'><Button success fullWidth = {true} >Continue now</Button></Link>
                <Link to= "/individual/siginup/register/continue" className='btn'><Button variant='outlined' fullWidth = {true} onClick={() => setIsVerify(false)}>Continue later</Button></Link>
              </div>
            </div>
          )}
      </div>
    </div>
  )
}

export default Register