import { Avatar, Button } from "@mui/material";
import React from "react";

const ProfileDetails = () => {
  return (
    <div className="flex w-11/12 mx-auto my-4 h-fit border rounded-full border-gray-300 px-2 py-3 items-center justify-between">
      <div className="flex items-center gap-2">
        <Avatar />
        <div>
          <p>Usernamre</p>
          <p>username</p>
        </div>
      </div>
      <Button>Switch</Button>
    </div>
  );
};

export default ProfileDetails;
