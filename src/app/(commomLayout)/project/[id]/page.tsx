import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const ProjectDetails = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const { id } = await params;
  const res = await fetch(
    `https://portfolio-api-opal.vercel.app/api/v1/project/${id}`
  );
  const project = await res.json();
  console.log(project);
  return (
    <section className="mt-10 md:mt-12">
      <div>
        <Image
          src={project?.data?.image}
          width={100}
          height={100}
          alt={project?.data?.title}
          className="group-hover:scale-110 h-full w-full object-cover duration-200"
        />
        <div className="mt-4 md:mt-6">
          <h2
            className="
          md:text-3xl text-lg font-bold mb-2"
          >
            {project?.data?.title}
          </h2>
          <p className="text-base">{project?.data?.description}</p>

          <h5 className="text-lg md:text-xl font-bold my-2">
            Project Features
          </h5>
          <ul className="text-base list-disc list-inside">
            {project?.data?.projectFeatures
              ?.split(",")
              ?.map((item: string, idx: number) => (
                <li key={idx}>{item}</li>
              ))}
          </ul>
          <h5 className="text-lg md:text-xl font-bold my-2">Tectnologies</h5>
          <ul className="text-base list-disc list-inside">
            {project?.data?.technologies
              ?.split(",")
              ?.map((item: string, idx: number) => (
                <li key={idx}>{item}</li>
              ))}
          </ul>
          <div className="flex my-2 md:my-4">
            <Link
              href={project?.data?.projectLiveLink}
              target="_blank"
              className="group text-sm md:text-base gap-1 font-bold flex items-center"
            >
              <FaExternalLinkAlt />
              <span> Live Link</span>
            </Link>
            <div className="max-w-full flex-none lg:px-4">
              <div className="flex flex-row gap-2">
                <Link
                  href={project?.data?.backendEndGithub}
                  target="_blank"
                  className="flex items-center gap-1"
                >
                  <FaGithub className="text-xs md:text-base" />
                  <span className="text-xs md:text-base">Server</span>
                </Link>
                <Link
                  href={project?.data?.fronEndGithub}
                  target="_blank"
                  className="flex items-center gap-1"
                >
                  <FaGithub className="text-xs md:text-base" />
                  <span className="text-xs md:text-base">Client</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectDetails;
