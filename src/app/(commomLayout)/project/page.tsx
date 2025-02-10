import ProjectPageCard from "@/components/portfolioCompnent/Projects/ProjectPageCard ";

const ProjectPage = () => {
  return (
    <section className="mt-10 md:mt-12">
      <div>
        <h2 className="font-bold capitalize text-2xl md:text-4xl mb-10 md:mb-14 text-center">
          projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 place-items-center lg:grid-cols-3 gap-5 md:gap-5">
          <ProjectPageCard />
          <ProjectPageCard />
          <ProjectPageCard />
          <ProjectPageCard />
        </div>
      </div>
    </section>
  );
};

export default ProjectPage;
