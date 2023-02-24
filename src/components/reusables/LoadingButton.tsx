import React from "react";
import { twMerge } from "tailwind-merge";
import Spinner from "./Spinner";

type LoadingButtonProps = {
  loading: boolean;
  btnColor?: string;
  textColor?: string;
  children: React.ReactNode;
  disabled?: boolean
};

export const LoadingButton: React.FC<LoadingButtonProps> = ({
  textColor = "text-white",
  btnColor = "bg-primary",
  children,
  loading = false,
  disabled
}) => {
  return (
    <button
      type="submit"
      className={twMerge(
        `w-[107px] md:w-[182px] py-3 rounded-lg outline-none border-none flex justify-center mx-auto hover:bg-secondary`,
        `${btnColor} ${loading && "bg-[#ccc]"} ${disabled && "hover:cursor-not-allowed hover:bg-[#ccc] "} `
      )}
    >
      {loading ? (
        <div className="flex items-center gap-3">
          <Spinner />
          <span className="text-slate-500 inline-block">Loading...</span>
        </div>
      ) : disabled ? ( <span className={`${textColor}`}>{children}</span>
      ): (
        <span className={`${textColor}`}>{children}</span>
      )}
    </button>
  );
};