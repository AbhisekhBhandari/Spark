"use client";

import Post from "@/components/home/post";
import PostFeed from "@/components/home/post-feed";
import ProfileSection from "@/components/home/profile/profile";
import { Card, Container } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import request, { gql } from "graphql-request";
import React from "react";



function Home() {

  return (
    <div className="w-full  flex gap-4  justify-between  px-1 ">
      <PostFeed />
      <ProfileSection />
    </div>
  );
}

export default Home;
