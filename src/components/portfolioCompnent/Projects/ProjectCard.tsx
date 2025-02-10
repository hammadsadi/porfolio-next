import pimage from "@/assets/images/p1.jpg";
import Image from "next/image";
// import { ShinyButton } from "@/components/magicui/shiny-button";

import { NeonGradientCard } from "@/components/magicui/neon-gradient-card";

export function ProjectCard() {
  return (
    <NeonGradientCard className="max-w-sm items-center justify-center text-center">
      <span className="pointer-events-none z-10 h-full whitespace-pre-wrap bg-gradient-to-br from-[#ff2975] from-35% to-[#00FFF1] bg-clip-text text-center text-xl font-bold leading-none tracking-tighter text-transparent dark:drop-shadow-[0_0.5px_0.5px_rgba(0,0,0,0.2)]">
        <Image
          src={pimage}
          width={100}
          height={100}
          alt="Sadi"
          className="w-full"
        />

        <div className="text-white mt-3 md:mt-6">
          <h2 className="text-lg md:text-xl font-bold">
            Helo Lorem ipsum dolor sit amet
          </h2>
          <p className="font-normal text-base leading-6 mt-2">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut culpa
            fuga aliquam a impedit reprehenderit nam excepturi voluptas. Sequi,
            rerum? Optio corrupti voluptatem soluta ab pariatur officiis nobis
            rem ad!
          </p>
          {/* <Link href="/project">
            <ShinyButton>More Details</ShinyButton>
          </Link> */}
        </div>
      </span>
    </NeonGradientCard>
  );
}
