import UserProfileDetails from "@/components/userProfile/user-details";
import UserProfilePosts from "@/components/userProfile/user-posts";
import React, { useState } from "react";

const UserProfile = () => {
 

  return (
    <div className="flex flex-col gap-3 h-full w-full lg:px-16 pt-5">
      <UserProfileDetails/>
      <UserProfilePosts/>
    </div>
  );
};

export default UserProfile;
