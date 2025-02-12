import Image from "next/image";

import { NeonGradientCard } from "@/components/magicui/neon-gradient-card";
import { TProject } from "@/types/index.types";

export function ProjectCard({ project }: { project: TProject }) {
  return (
    <NeonGradientCard className="max-w-sm items-center justify-center text-center">
      <span className="pointer-events-none z-10 h-full whitespace-pre-wrap bg-gradient-to-br from-[#ff2975] from-35% to-[#00FFF1] bg-clip-text text-center text-xl font-bold leading-none tracking-tighter text-transparent dark:drop-shadow-[0_0.5px_0.5px_rgba(0,0,0,0.2)]">
        <Image
          src={project?.image}
          width={100}
          height={100}
          alt={project?.title}
          className="w-full"
        />

        <div className="dark:text-white text-black mt-3 md:mt-6">
          <h2 className="text-lg md:text-xl font-bold">{project?.title}</h2>
          <p className="font-normal text-base leading-6 mt-2">
            {project?.description}
          </p>
        </div>
      </span>
    </NeonGradientCard>
  );
}
