"use client";
import React from "react";
import { Avatar, Button } from "@mui/material";
import { useParams } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import { client } from "@/lib/utils/request";
import { GET_USER_BY_ID_QUERY } from "@/lib/query/user";
import { User } from "@/gql/graphql";

function UserProfileDetails() {
  const { id } = useParams();
  const { data, isPending } = useQuery({
    queryKey: ["user", id],
    queryFn: (): Promise<{ getUserById: User }> =>
      client.request(GET_USER_BY_ID_QUERY, { userId: id }),
    enabled: !!id,
  });

  if (isPending) return <div>Loading</div>;
  return (
    <div className="flex pb-10 border-b">
      <div className="flex justify-center w-4/12">
        <Avatar sx={{ height: 120, width: 120 }} />
      </div>
      <div className="flex flex-col gap-2">
        <div className="flex gap-8 items-center">
          <p className="text-xl ">{data?.getUserById.username}</p>
          <Button variant="contained" size="small">
            Edit Profile
          </Button>
          <Button variant="contained" size="small">
            Settings
          </Button>
        </div>
        <div className="flex gap-3">
          <p>
            <span className="font-semibold">0</span> Posts
          </p>
          <p>
            <span className="font-semibold">0</span> Followers
          </p>
          <p>
            <span className="font-semibold">0</span> Following
          </p>
        </div>
        <div>
          <p>This is about me. My bio..</p>
        </div>
      </div>
    </div>
  );
}

export default UserProfileDetails;
