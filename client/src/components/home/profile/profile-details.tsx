'use client'
import { User } from "@/gql/graphql";
import { getStorage } from "@/hooks/use-local-storage";
import { Avatar, Button } from "@mui/material";
import React, { useEffect, useState } from "react";

const ProfileDetails = () => {
  const [data, setData] = useState<User | null>(null);
  useEffect(()=>{
    const temp = getStorage('user')
    setData(temp)
  },[])
  return (
    <div className="flex w-11/12 mx-auto my-4 h-fit border rounded-full border-gray-300 px-2 py-3 items-center justify-between">
      <div className="flex items-center gap-2">
        <Avatar />
        <div>
          <p>{data?.username}</p>
          <p>username</p>
        </div>
      </div>
      <Button>Switch</Button>
    </div>
  );
};

export default ProfileDetails;
