import { Tab, Tabs, Typography } from "@mui/material";
import React, { Dispatch, SetStateAction } from "react";
import LoginForm from "./login-form";
import SignupForm from "./signup-form";


interface AuthWrapperProps{
    activeTab:"login" | "signup",
    setActiveTab:Dispatch<SetStateAction<"login" | "signup">>
    setDetailsFillShow: Dispatch<SetStateAction<boolean>>
}

function AuthWrapper({activeTab, setActiveTab, setDetailsFillShow}:AuthWrapperProps) {
  return (
    <div className="flex-1  flex  flex-col w-full  items-center justify-around">
      <div className="pl-4 flex md:hidden ">
        <p className="text-4xl font-semibold  ">
          Spark<span className="text-[#6372E5] ">+</span>{" "}
        </p>
        <div></div>
      </div>
      <div className="text-center flex flex-col gap-1  ">
        <Typography variant="h5" fontWeight={600}>
          Welcome Back
        </Typography>
        <Typography variant="body2" fontWeight={400}>
          Log in your account with your phone number/email & password.
        </Typography>
      </div>
      <Tabs
        TabIndicatorProps={{
          sx: { display: "none" },
        }}
        sx={{
          "& button.Mui-selected": {
            border: "2px solid",
            borderColor: "primary",
            borderRadius: "40px",
            fontWeight: 600,
          },
        }}
        className=" w-11/12  bg-gray-400 border-2 rounded-full  bg-opacity-10  "
        value={activeTab}
      >
        <Tab
          value="login"
          label="Login"
          className="w-1/2
       "
          onClick={() => setActiveTab("login")}
        />
        <Tab
          value={"signup"}
          label="Sign Up"
          className="w-1/2 rounded-full 
      "
          onClick={() => setActiveTab("signup")}
        />
      </Tabs>

      {activeTab === "login" ? <LoginForm /> : <SignupForm setDetailsFillShow={setDetailsFillShow}/>}
    </div>
  );
}

export default AuthWrapper;
