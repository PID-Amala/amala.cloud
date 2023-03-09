import React from 'react';
import { useFormContext } from 'react-hook-form';
import clsx from "clsx";

type FormInputProps = {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  variant?: "short" | "long";
};

const FormInput: React.FC<FormInputProps> = ({label, name, type = 'text', placeholder, variant="long"}) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div className='mb-3'>
      <label htmlFor={name} className='block'>
        {label}
      </label>
      <input
        type={type}
        placeholder= {placeholder}
        className={clsx('block rounded-[10px] appearance-none focus:bg-white focus:outline focus:outline-[#D9D9D9] bg-[#D9D9D9] py-2 px-4',
          {
            "w-[300px] md:w-[390px]":
            variant== "long",
            "w-[111px] md:w-[172px]":
            variant== "short",
          }
        )}
        {...register(name)}
      />
      {errors[name] && (
        <span className='text-red-500 text-xs pt-1 block'>
          {errors[name]?.message as string}
        </span>
      )}
    </div>
  );
};

export default FormInput;