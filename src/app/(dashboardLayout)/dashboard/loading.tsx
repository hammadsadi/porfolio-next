import Loader from "@/components/portfolioCompnent/Shared/Loader/Loader";
import React from "react";

const loading = () => {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <Loader />
    </div>
  );
};

export default loading;
