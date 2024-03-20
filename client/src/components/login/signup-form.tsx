import { Button, Divider, Typography } from "@mui/material";
import React from "react";
import TextInput from "@/components/login/text-input";
import EmailIcon from "@/assets/icons/email-icon.svg";
import PasswordIcon from "@/assets/icons/password-icon.svg";
import GoogleIcon from "@/assets/icons/google.svg";
import Image from "next/image";

function SignupForm() {
  return (
    <>
      <div className="w-10/12  flex flex-col gap-3">
        <div>
          <p>Email Address</p>
          <TextInput placeholder="Email Address" icon={EmailIcon} />
        </div>
        <div>
          <p>Password</p>
          <TextInput
            placeholder="Password"
            icon={PasswordIcon}
            type="password"
          />
        </div>
        <div>
          <p>Confirm Password</p>
          <TextInput
            placeholder="Confirm Password"
            icon={PasswordIcon}
            type="password"
          />
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
        >
          Sign Up
        </Button>
      </div>
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
