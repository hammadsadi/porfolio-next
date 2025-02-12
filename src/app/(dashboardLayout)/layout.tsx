"use client";
import Sidebar from "@/components/portfolioCompnent/Sidebar/Sidebar";
// import { authOptions } from "@/utils/authOptions";
// import { getServerSession } from "next-auth";
import { SessionProvider } from "next-auth/react";
import React, { ReactNode } from "react";

const layout = ({ children }: { children: ReactNode }) => {
  // const session = await getServerSession(authOptions);
  return (
    <div className="relative min-h-screen md:flex  ">
      <SessionProvider>
        {/* Sidebar */}
        <Sidebar />
        {/* Outlet --> Dynamic content */}
        <div className="flex-1">
          <div className="p-5">{children}</div>
        </div>
      </SessionProvider>
    </div>
  );
};

export default layout;
