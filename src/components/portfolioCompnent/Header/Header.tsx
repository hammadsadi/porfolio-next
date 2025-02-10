import Image from "next/image";
import sadi from "@/assets/images/sadi.jpg";
import { DownloadResume } from "../Shared/DownloadResume/DownloadResume";
import { MorphingText } from "@/components/magicui/morphing-text";
const texts = ["Hello", "Im", "Hammad Sadi", "Full Stack", "Developer"];
const Header = () => {
  return (
    <div className="dark:bg-[#09090b] bg-gray-100 mt-5 md:mt-8 grid grid-cols-1 md:grid-cols-2 gap-4 py-10 md:py-20 px-5">
      <div className="flex justify-center flex-col items-center space-y-3">
        <MorphingText texts={texts} />
        <p>
          Full-Stack Developer specializing in React, Next.js, Node.js, and
          TypeScript. I build scalable, high-performance web applications. Let’s
          create something amazing!
        </p>
        <DownloadResume />
      </div>
      <div className="flex justify-center items-center">
        <Image
          src={sadi}
          width={100}
          height={100}
          alt="Hammad Sadi"
          className=" md:w-[250px] w-[200px]"
        />
      </div>
    </div>
  );
};

export default Header;
