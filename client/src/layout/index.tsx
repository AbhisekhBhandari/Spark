import Sidebar from "@/components/sidebar";
import { Stack } from "@mui/material";
import React, { ReactNode } from "react";

interface MainLayoutProps {
  children: ReactNode;
}

function MainLayout({ children }: MainLayoutProps) {
  return (
    <main className="flex min-h-screen gap-2">
      <Sidebar />
      <div className=" w-full  1050:ml-10 mx-2 mb-24 1050:mb-10 1050:w-4/5 max-w-[100vw] overflow-x-hidden  ">
    
        {children}
        </div>
    </main>
  );
}

export default MainLayout;
