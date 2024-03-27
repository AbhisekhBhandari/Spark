"use client";
import React from "react";
import ShowMoreTextP from "react-show-more-text";

function ShowMoreText({ children }: { children: string }) {
  return (
    <ShowMoreTextP
      lines={3}
      more="Show More"
      onClick={() => console.log("clicked")}
    >
      {children}
    </ShowMoreTextP>
  );
}

export default ShowMoreText;
