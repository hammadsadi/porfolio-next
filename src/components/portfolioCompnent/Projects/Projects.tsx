import React from "react";
import { ProjectCard } from "./ProjectCard";
import { TProject } from "@/types/index.types";

const Projects = async () => {
  const res = await fetch(
    "https://portfolio-api-opal.vercel.app/api/v1/project"
  );
  const project = await res.json();
  return (
    <section className="mt-10 md:mt-12">
      <div>
        <h2 className="font-bold capitalize text-2xl md:text-4xl mb-10 md:mb-14 text-center">
          featured projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 place-items-center lg:grid-cols-3 gap-5 md:gap-5">
          {project?.data?.slice(0, 4)?.map((item: TProject) => (
            <ProjectCard key={item._id} project={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
