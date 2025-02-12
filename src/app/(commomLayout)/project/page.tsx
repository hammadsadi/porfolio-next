import ProjectPageCard from "@/components/portfolioCompnent/Projects/ProjectPageCard ";
import { TProject } from "@/types/index.types";

const ProjectPage = async () => {
  const res = await fetch(
    "https://portfolio-api-opal.vercel.app/api/v1/project"
  );
  const project = await res.json();
  return (
    <section className="mt-10 md:mt-12">
      <div>
        <h2 className="font-bold capitalize text-2xl md:text-4xl mb-10 md:mb-14 text-center">
          projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 place-items-center lg:grid-cols-3 gap-5 md:gap-5">
          {project?.data?.map((project: TProject) => (
            <ProjectPageCard key={project._id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectPage;
