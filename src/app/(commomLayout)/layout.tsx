import Navbar from "@/components/portfolioCompnent/Shared/Navbar/Navbar";
import { ReactNode } from "react";

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="container mx-auto px-4 md:px-0">
      <Navbar />
      {children}
    </div>
  );
};

export default layout;
