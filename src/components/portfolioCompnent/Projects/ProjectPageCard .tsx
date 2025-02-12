import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FaExternalLinkAlt } from "react-icons/fa";

import { FaGithub } from "react-icons/fa";
import { TProject } from "@/types/index.types";
const ProjectPageCard = ({ project }: { project: TProject }) => {
  return (
    <div className="group cursor overflow-hidden rounded-2xl shadow-xl duration-200 hover:-translate-y-4">
      <div className="flex h-60 flex-col justify-between overflow-hidden">
        <Image
          src={project?.image}
          width={100}
          height={100}
          alt={project?.title}
          className="group-hover:scale-110 h-full w-full object-cover duration-200"
        />
      </div>
      <div className="flex-1 overflow-hidden bg-gray-800/5 px-6 py-8">
        <h5 className=" mb-4 text-xl font-bold">{project?.title}</h5>
        <p className="mb-4 text-gray-300">{project?.description}</p>
        <div className="mb-2">
          <Link
            href={`/project/${project?._id}`}
            className="text-xs text-blue-600"
          >
            [More Details...]
          </Link>
        </div>
        <div className="flex justify-between">
          <Link
            href={project?.projectLiveLink}
            target="_blank"
            className="group text-sm gap-1 font-bold flex items-center"
          >
            <FaExternalLinkAlt />
            <span> Live Link</span>
          </Link>
          <div className="max-w-full flex-none lg:px-4">
            <div className="flex flex-row gap-2">
              <Link
                href={project?.backendEndGithub}
                target="_blank"
                className="flex items-center gap-1"
              >
                <FaGithub className="text-xs" />
                <span className="text-xs">Server</span>
              </Link>
              <Link
                href={project?.fronEndGithub}
                target="_blank"
                className="flex items-center gap-1"
              >
                <FaGithub className="text-xs" />
                <span className="text-xs">Client</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectPageCard;
