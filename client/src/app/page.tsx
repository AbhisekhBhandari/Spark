"use client";
import { Box, Paper, Stack, Tab, Tabs, Typography } from "@mui/material";
import Image from "next/image";
import LoginImage from "../assets/login/p2.jpeg";
import LoginForm from "@/components/login/login-form";
import { useState } from "react";
import SignupForm from "@/components/login/signup-form";
import { AnimatePresence, motion } from "framer-motion";
// ------------------------------------------------------------------------

const TABS_CONTENT = [
  {
    value: "login",
    component: <LoginForm />,
  },
  {
    value: "signup",
    component: <SignupForm />,
  },
];

export default function Home() {
  const [activeTab, setActiveTab] = useState<"login" | "signup">("login");
  return (
    // 6372E5
    // #b372E5
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        
        
      }}
      // bgcolor={"primary.light"}
      
    
    >
      <Paper
        elevation={20}
        sx={{
          width: "90%",
          height: "85%",
          py: 4,
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Stack
          flexDirection={"row"}
          gap={{ sm: 10, lg: 20 }}
          width={"94%"}
          className=""
        >
          <div className="flex-1 md:flex hidden  flex-col justify-between pb-3  ">
            <div className="pl-4 ">
              <p className="text-3xl font-semibold  ">
                Spark<span className="text-[#6372E5] ">+</span>{" "}
              </p>
              <div>
                <Typography mt={0.6} variant="body2">
                  Ignite your learning journey, with spark technologies.
                </Typography>
              </div>
            </div>
            <div className=" w-full flex  ">
              <Image
                src={LoginImage}
                width={600}
                height={1000}
                alt="image"
                className="object-center"
              />
            </div>
            <div className="flex justify-between px-5">
              <p>Dont have an account?</p>
              <p className="text-[#6372E5] border-b-2 border-b-[#6372E5] ">
                Sign up
              </p>
            </div>
          </div>
          <div className="flex-1  flex  flex-col w-full  items-center justify-around">
            <div className="pl-4 flex md:hidden ">
              <p className="text-4xl font-semibold  ">
                Spark<span className="text-[#6372E5] ">+</span>{" "}
              </p>
              <div>
               
              </div>
            </div>
            <div className="text-center flex flex-col gap-1 ">
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
                  fontWeight: 600,
                },
              }}
              className=" w-11/12 bg-gray-300 border-2 rounded-full bg-opacity-10  "
              value={activeTab}
            >
              <Tab
                value="login"
                label="Login"
                className="w-1/2 rounded-full border-1 
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
    

            {activeTab === "login" ? <LoginForm /> : <SignupForm />}
          </div>
        </Stack>
      </Paper>
    </Box>
  );
}
