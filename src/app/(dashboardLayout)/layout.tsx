import Sidebar from "@/components/portfolioCompnent/Sidebar/Sidebar";
import React, { ReactNode } from "react";

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex">
      <div>
        <Sidebar />
      </div>
      <div className="ml-64 p-4">{children}</div>
    </div>
  );
};

export default layout;
