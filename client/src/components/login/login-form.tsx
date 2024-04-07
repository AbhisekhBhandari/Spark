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
import { gql } from "graphql-request";
import { useMutation } from "@tanstack/react-query";
import { useSnackbar } from "@/contexts/Snackbar";
import { client } from "@/lib/utils/request";
import { setStorage } from "@/hooks/use-local-storage";
import { AuthPayload, User } from "@/gql/graphql";

const Login_Query = gql`
  mutation Mutation($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        username
        userId
        profilePicture
        password
        isDataFilled
        email
        dateOfBirth
      }
    }
  }
`;

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
  const navigate = useRouter();
  const { showSnackbar } = useSnackbar();

  const mutation = useMutation({
    mutationFn: async (data: LoginSchemaType) => {
      const response = await client.request(Login_Query, {
        email: data.email,
        password: data.password,
      });
      
      return response;
    },
    onSuccess: (data: any) => {
      try {
        console.log("data", data);
        const userStringify = JSON.stringify(data.login.user);
        setStorage("user", userStringify);
        showSnackbar("Logged in Successfully!", "success");
        navigate.push("/");
      } catch (err) {}
    },
    onError: (error) => {
      try {
        console.log("err", error);
        const temp = JSON.stringify(error);
      } catch (err) {}
    },
  });

  return (
    <>
      {/* {mutation.isError ? (
        <div>An error occurred: {mutation.error.message}</div>
      ) : null} */}

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
