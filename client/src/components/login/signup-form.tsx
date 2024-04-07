import { Button, Divider, Typography } from "@mui/material";
import React, { Dispatch, SetStateAction } from "react";
import TextInput from "@/components/login/text-input";
import EmailIcon from "@/assets/icons/email-icon.svg";
import PasswordIcon from "@/assets/icons/password-icon.svg";
import GoogleIcon from "@/assets/icons/google.svg";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { SignupSchemaType, signupSchema } from "@/lib/validation/zod";
import  { gql } from "graphql-request";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";

import { graphql } from "@/gql/gql";
import { AuthPayload, SignupResponse, User } from "@/gql/graphql";
import { useSnackbar } from "@/contexts/Snackbar";
import { setStorage } from "@/hooks/use-local-storage";
import { client } from "@/lib/utils/request";
// import {} from '@/gql/u'

const Signup_Query = gql`
  mutation Signup($email: String!, $password: String!) {
    signup(email: $email, password: $password) {
      user {
        email
        isDataFilled
        password
        profilePicture
        userId
        username
      }
    }
  }
`;
interface SignupFormProps{
setDetailsFillShow: Dispatch<SetStateAction<boolean>>
}

function SignupForm({setDetailsFillShow}:SignupFormProps) {
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
  });
  const snackbar = useSnackbar()
  const navigate = useRouter();

  const mutation = useMutation({
    mutationFn: (data: SignupSchemaType): Promise<AuthPayload> => {
      return client.request(Signup_Query, {
        email: data.email,
        password: data.password,
      });
    },
    onSuccess: (data:any) => {
      console.log("data", data);
      const userStringify = JSON.stringify(data.signup.user);
      setStorage("user", userStringify);
      setDetailsFillShow(true);
    },
  });

  return (
    <>
      <form
        onSubmit={handleSubmit((data) => mutation.mutate(data))}
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
          disabled={mutation.isPending}
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
