"use client";
import { Box, Paper, Stack, Tab, Tabs, Typography } from "@mui/material";
import Image from "next/image";
import LoginImage from "@/assets/login/p2.jpeg";
import { useEffect, useState } from "react";
import { gql } from "graphql-request";
import { useQuery } from "@/hooks/useQuery";
import { useAuthenticated } from "@/hooks/useAuthenticated";
import { useRouter } from "next/navigation";
import AuthWrapper from "@/components/login/auth-wrapper";
import DetailsFill from "@/components/login/details-fill";
import { getStorage } from "@/hooks/use-local-storage";
// ------------------------------------------------------------------------
const ExampleQuery = gql``;
export default function Home() {
  const [activeTab, setActiveTab] = useState<"login" | "signup">("login");
  const [detailsFillShow, setDetailsFillShow] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);
  const { data } = useQuery(["hello"], ExampleQuery);
  const navigate = useRouter();
  async function init() {
    // const isAuthenticated = await useAuthenticated();
    const isAuthenticated = await getStorage("user");
    if (isAuthenticated) {
      if (!isAuthenticated.isDataFilled) {
        setDetailsFillShow(true);
      } else {
        navigate.push("/");
      }
    }
  }
  useEffect(() => {
    init();
    setLoading(false);
  }, []);

  if (loading) return <div>Loading...</div>;
  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      bgcolor={"primary.light"}
    >
      <Paper
        elevation={20}
        sx={{
          width: "100%",
          height: "100%",
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
          {detailsFillShow ? (
            <DetailsFill />
          ) : (
            <AuthWrapper
              activeTab={activeTab}
              setActiveTab={setActiveTab}
              setDetailsFillShow={setDetailsFillShow}
            />
          )}
          {/* <DetailsFill /> */}
        </Stack>
      </Paper>
    </Box>
  );
}
