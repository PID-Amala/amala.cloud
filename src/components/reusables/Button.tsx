import clsx from "clsx";
import React, { ButtonHTMLAttributes, ReactNode } from "react";

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  fullWidth?: boolean;
  disabled?: boolean;
  success?: boolean;
  variant?: "outlined" | "contained";
}
export const Button = (props: IButton) => {
  const { children, fullWidth, disabled, success, variant = "contained" } = props;
  return (
    <button
      disabled={disabled}
      {...props}
      className={clsx(
        "rounded-[10px] py-4 px-4 mt-6 capitalize cursor-pointer transition-all ",
        {
          "w-full": fullWidth === true,
          "bg-primary  text-white hover:bg-secondary":
            variant === "contained",
          "bg-primary hover:bg-primary hover:cursor-not-allowed":
            variant === "contained" && disabled,
          "bg-tertiary text-black hover:bg-secondary":
            variant === "outlined",
          "bg-tertiary text-black cursor-not-allowed hover:bg-white ":
            variant === "outlined" && disabled,
          "bg-secondary  text-white hover:bg-secondary ":
            variant === "contained" && success,
        }
      )}
    >
      {children}
    </button>
  );
};
