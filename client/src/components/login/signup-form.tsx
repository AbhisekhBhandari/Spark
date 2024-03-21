import { Button, Divider, Typography } from "@mui/material";
import React from "react";
import TextInput from "@/components/login/text-input";
import EmailIcon from "@/assets/icons/email-icon.svg";
import PasswordIcon from "@/assets/icons/password-icon.svg";
import GoogleIcon from "@/assets/icons/google.svg";
import Image from "next/image";
import { useForm } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";
import { SignupSchemaType, signupSchema } from "@/lib/validation/zod";

function SignupForm() {
  const {
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
    control,
  } = useForm<SignupSchemaType>({
    resolver: zodResolver(signupSchema),
    defaultValues: {
      email: "",
      password: "",
      confirmPassword: "",
    },
    // mode: "onChange",
  });
  console.log("values", errors);

  const onSubmitHandler = async (data: SignupSchemaType) => {
    console.log("helo", data);

    await new Promise((res, rej) => setTimeout(res, 1000));
    reset();
  };
  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmitHandler)}
        className="w-10/12  flex flex-col gap-3"
      >
        <div>
          <p>Email Address</p>
          <TextInput
            placeholder="Email Address"
            icon={EmailIcon}
            hookProps={{
              control,
              name: "email",
            }}
          />
          {errors.email && (
            <Typography color={"red"}>{errors.email.message}</Typography>
          )}
        </div>
        <div>
          <p>Password</p>
          <TextInput
            placeholder="Password"
            icon={PasswordIcon}
            type="password"
            hookProps={{
              control,
              name: "password",
            }}
          />
          {errors.password && (
            <Typography color={"red"}>{errors.password.message}</Typography>
          )}
        </div>
        <div>
          <p>Confirm Password</p>
          <TextInput
            placeholder="Confirm Password"
            icon={PasswordIcon}
            type="password"
            hookProps={{
              control,
              name: "confirmPassword",
            }}
          />
          {errors.confirmPassword && (
            <Typography color={"red"}>
              {errors.confirmPassword.message}
            </Typography>
          )}
        </div>
        <div className="flex justify-between my-2">
          <div className="flex gap-1">
            <input type="checkbox" id="rememberMe" />
            <label htmlFor="rememberMe">Remember me</label>
          </div>
          <p className="text-[#6372E5] text-sm border-b-2 border-b-[#6372E5]  ">
            Forgot Password?
          </p>
        </div>
        <Button
          variant="contained"
          className="bg-[#6372E5] w-full rounded-lg  py-3 text-base font-semibold mx-auto"
          type="submit"
        >
          Sign Up
        </Button>
      </form>
      <Divider className="w-full">or</Divider>
      <div>
        <Button startIcon={<Image src={GoogleIcon} alt="email" width={20} />}>
          Sign in With Google
        </Button>
      </div>
    </>
  );
}

export default SignupForm;
