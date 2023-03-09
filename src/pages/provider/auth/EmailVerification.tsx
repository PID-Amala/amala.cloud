import React, {useEffect} from 'react'
// Zod - A typescript-first schema validation library.
import { object, string, TypeOf } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, FormProvider, SubmitHandler } from "react-hook-form";
import FormInput from '../../../components/reusables/FormInput'
import { LoadingButton } from '../../../components/reusables/LoadingButton';
import { toast } from "react-toastify";
import { Link, useNavigate, useParams } from "react-router-dom";
import useStore from "../../../store";
import { authApi } from "../../../api/authApi";
import { GenericResponse } from "../../../api/types";
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
  const store = useStore();
  const navigate = useNavigate();
  const { verificationCode } = useParams();

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

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSubmitSuccessful]);

  useEffect(() => {
    if (verificationCode) {
      setValue("verificationCode", verificationCode);
    }
  }, []);

  const verifyEmail = async (data: EmailVerificationInput) => {
    try {
      store.setRequestLoading(true);
      const response = await authApi.get<GenericResponse>(
        `auth/verifyemail/${data.verificationCode}`
      );
      store.setRequestLoading(false);
      toast.success(response.data.message as string, {
        position: "top-right",
      });
      navigate("/login");
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

  const onSubmitHandler: SubmitHandler<EmailVerificationInput> = (values) => {
    verifyEmail(values);
  };

  return (
    <div className='paddingX pt-4'>
      <Link to='/'><img src={logo} alt="amala logo" className='w-[134px]'/></Link>
      <div className='flex flex-col items-center pt-[60px] md:pt-0'>
        <img src={user} alt="user" />
        <h1 className='h1 mb-2'>Company mail verification</h1>
        <p className='max-w-[293px] text-center leading-tight'>Please check your comapany mail, we’ve sent you a mail for verification.</p>
        <img src={check} alt="check"/>
        <FormProvider {...methods}>
          <form
            onSubmit={handleSubmit(onSubmitHandler)}
          >
            <FormInput label='Verification Code' name='verificationCode' />
            <LoadingButton
              loading={store.requestLoading}
            >
              Verify
            </LoadingButton>
          </form>
        </FormProvider>
      </div>
    </div>
  )
}

export default EmailVerification