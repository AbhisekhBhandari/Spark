"use client";

import { cn } from "../../lib/utils";
import Image from "next/image";
import React, { HTMLAttributes, ReactNode, forwardRef, useState } from "react";
import EyeOpenIcon from "../../assets/icons/eyeOpen-icon.svg";
import EyeClosedIcon from "../../assets/icons/eyeClosed-icon.svg";
import {
  FieldValues,
  UseFormRegister,
  UseControllerProps,
  useController,
  Control,
} from "react-hook-form";

interface TextInputProps extends HTMLAttributes<HTMLInputElement> {
  icon?: string;
  placeholder: string;
  className?: string;
  type?: "password" | "default";
  register?: UseFormRegister<FieldValues>;
  hookProps: UseControllerProps<Record<string, string>> | any;
  label?: string;
}

const TextInput = forwardRef(function TextInput(
  {
    icon,
    placeholder,
    className,
    type = "default",
    register,
    hookProps,
    label,
    ...props
  }: TextInputProps,
  ref: React.ForwardedRef<HTMLInputElement>
) {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const { field, fieldState } = useController(hookProps);

  if (type === "password") {
    return (
      <>
      {label && <label>{label}</label>}
        <div
          className={cn(
            "border mt-1  px-3  border-[#6372E5] border-opacity-60  bg-[#6372E5] bg-opacity-5  shadow-md  h-11 flex items-center gap-2 rounded-lg  ",
            className
          )}
        >
          {icon && (
            <Image
              src={icon}
              alt="icon"
              width={20}
              className="border-[#6372E5]"
              color="#6372E5"
            />
          )}
          <input
            {...field}
            type={showPassword ? "text" : "password"}
            autoComplete={placeholder}
            placeholder={placeholder}
            className="outline-none h-full w-full text-sm bg-transparent "
            // ref={ref}
          />
          <Image
            src={showPassword ? EyeClosedIcon : EyeOpenIcon}
            alt="eye"
            width={20}
            className="cursor-pointer"
            onClick={() => setShowPassword((prev) => !prev)}
          />
        </div>
      </>
    );
  }

  return (
    <div className="flex flex-col w-full ">
    {label && <label>{label}</label>}
    <div
      className={cn(
        "border mt-1  px-3 w-full border-[#6372E5] border-opacity-60  bg-[#6372E5] bg-opacity-5  shadow-md  h-11 flex items-center gap-2 rounded-lg  ",
        className
      )}
    >
      <div>
        {icon && (
          <Image
            src={icon}
            alt="icon"
            width={20}
            className="border-[#6372E5]"
            color="#6372E5"
          />
        )}
      </div>
      <input
        {...field}
        type="text"
        placeholder={placeholder}
        autoComplete={placeholder}
        className="outline-none h-full w-full text-sm bg-transparent "
      />
    </div>
    </div>

  );
});

export default TextInput;
