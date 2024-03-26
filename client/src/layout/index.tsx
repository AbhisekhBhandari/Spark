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
      <div className="w-4/5">{children}</div>
    </main>
  );
}

export default MainLayout;
