import { Button, Divider, Typography } from "@mui/material";
import React, { useEffect } from "react";
import TextInput from "@/components/login/text-input";
import EmailIcon from "@/assets/icons/email-icon.svg";
import PasswordIcon from "@/assets/icons/password-icon.svg";
import GoogleIcon from "@/assets/icons/google.svg";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoginSchema, LoginSchemaType } from "@/lib/validation/zod";
import { useRouter } from "next/navigation";


function LoginForm() {
  const {
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
    control,
  } = useForm<LoginSchemaType>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });
  
  const navigate = useRouter()

  const onSubmitHandler = async (data: LoginSchemaType) => {
    console.log("helo", data);

    await new Promise((res, rej) => setTimeout(res, 1000));
    console.log('hello');
    
    navigate.replace('/')
    // reset();
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
              //   rules: {
              //     required: "Email is required",
              //   },
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
              //   rules: {
              //     required: "Password is required.",
              //     minLength: {
              //       value: 8,
              //       message: "Password must be atleast 8 characters",
              //     },
              //   },
            }}
          />
          {errors.password && (
            <Typography color={"red"}>{errors.password.message}</Typography>
          )}
        </div>
        <div className="flex justify-between my-2">
          <div className="flex gap-1">
            <input type="checkbox" id="rememberMe" />
            <label htmlFor="rememberMe">Remember me</label>
          </div>
          <p className="text-[#6372E5] text-sm border-b-2 border-b-[#6372E5] ">
            Forgot Password?
          </p>
        </div>
        <Button
          variant="contained"
          className="bg-[#6372E5] w-full rounded-lg  py-3 text-base font-semibold mx-auto"
          type="submit"
          disabled={isSubmitting}
        >
          Login
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

export default LoginForm;
