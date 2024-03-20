"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import React, { HTMLAttributes, ReactNode, useState } from "react";
import EyeOpenIcon from "../../assets/icons/eyeOpen-icon.svg";
import EyeClosedIcon from "../../assets/icons/eyeClosed-icon.svg";

interface TextInputProps extends HTMLAttributes<HTMLDivElement> {
  icon?: string;
  placeholder: string;
  className?: string;
  type?: "password" | "default";
}

export default function TextInput({
  icon,
  placeholder,
  className,
  type = "default",
  ...props
}: TextInputProps) {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  console.log("classname");
  if (type === "password") {
    return (
      <div
        className={cn(
          "border mt-1  px-3 border-[#6372E5] border-opacity-60  bg-[#6372E5] bg-opacity-5  shadow-md  h-11 flex items-center gap-2 rounded-lg  ",
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
          type={showPassword ? "text" : "password"}
          placeholder={placeholder}
          className="outline-none h-full w-full text-sm bg-transparent "
        />
        <Image
          src={showPassword ? EyeClosedIcon : EyeOpenIcon}
          alt="eye"
          width={20}
          className="cursor-pointer"
          onClick={() => setShowPassword((prev) => !prev)}
        />
      </div>
    );
  }

  return (
    <div
      className={cn(
        "border mt-1  px-3 border-[#6372E5] border-opacity-60  bg-[#6372E5] bg-opacity-5  shadow-md  h-11 flex items-center gap-2 rounded-lg  ",
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
        type="text"
        placeholder={placeholder}
        className="outline-none h-full w-full text-sm bg-transparent "
      />
    </div>
  );
}
