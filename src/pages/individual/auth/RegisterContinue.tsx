import React, {useState, useEffect} from 'react'
// Zod - A typescript-first schema validation library.
import { object, string, TypeOf} from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, FormProvider, SubmitHandler } from "react-hook-form";
import FormInput from '../../../components/reusables/FormInput'
import { LoadingButton } from '../../../components/reusables/LoadingButton'
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import { authApi } from "../../../api/authApi";
import { GenericResponse } from "../../../api/types";
import useStore from "../../../store";
import logo from '../../../assets/icons/amala.svg'
import user from '../../../assets/icons/user.svg'
import TermsConditions from '../../home/TermsConditions'


//type definition with error messages for the form input
const registerSchema = object({
  postCode: string()
  .min(1, "Post code is required - numbers only")
  .max(6, "Post code must not be more than 6 digits")
  .regex(/^([0-9]{6})$/, "post code must be 6 digits"),
  state: string().min(1, "State is required").max(50),
  lga: string().min(1, "Local Goverment Area is required").max(50),
  city: string().min(1, "City is required").max(50),
  address: string().min(1, "Address is required").max(100),
});

//type definition for form
export type SignupInput = TypeOf<typeof registerSchema>;

const RegisterContinue = () => {
  const [isChecked, setIsChecked] = useState(false);
  const [isTerm, setIsTerm] = useState(false);

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
    console.log("I was called");
    navigate('/individual/dashboard');
    registerUser(values);
  };

  return (
    <div className='paddingX pt-4 pb-32'>
      <Link to='/'><img src={logo} alt="amala logo" className='w-[134px]'/></Link>
      <div className='flex flex-col items-center pt-[100px] md:pt-0'>
        <img src={user} alt="user" />
        <h1 className='text-[23px] md:text-[36px] font-bold leading-8 max-w-[533px] text-center'>You're almost done.</h1>
        <FormProvider {...methods}>
          <form className='mt-8'
            onSubmit={handleSubmit(onSubmitHandler)}
          >
            <FormInput label='Post Code' name='postCode' placeholder='101233' variant='short'/>
            <div className='text-primary text-[12px] mt-[-10px] mb-4'><Link to=''>Check your Post Code here</Link></div>
            <div className='flex gap-8'>
              <FormInput label='State' name='state' variant='short'/>
              <FormInput label='LGA' name='lga' variant='short'/>
            </div>
            <FormInput label='City' name='city' variant='short'/>
            <FormInput label='Address' name='address'/>
            <input
              className='mr-3 mb-10'
              id="terms"
              name= 'terms'
              type="checkbox"
              checked={isChecked}
              onChange={()=> {setIsChecked(!isChecked)}}
            /> 
            <label className='text-[12px] text-primary' htmlFor='term' onClick={()=> setIsTerm(true)}><Link to=''>Accept our terms and conditions</Link></label>
            
            <LoadingButton
              loading={store.requestLoading}
              disabled = {isChecked ? false : true}
            >
              Submit
            </LoadingButton>
          </form>
        </FormProvider>
      </div>
        {isTerm && (
          <TermsConditions
            setIsTerm = {setIsTerm}
          />
        )}
    </div>
  )
}

export default RegisterContinue