import { IconCloud } from "@/components/magicui/icon-cloud";

const slugs = [
  "typescript",
  "javascript",
  "dart",
  "java",
  "react",
  "flutter",
  "android",
  "html5",
  "css3",
  "nodedotjs",
  "express",
  "nextdotjs",
  "prisma",
  "amazonaws",
  "postgresql",
  "firebase",
  "nginx",
  "vercel",
  "testinglibrary",
  "jest",
  "cypress",
  "docker",
  "git",
  "jira",
  "github",
  "gitlab",
  "visualstudiocode",
  "androidstudio",
  "sonarqube",
  "figma",
];
const Skills = () => {
  const images = slugs.map(
    (slug) => `https://cdn.simpleicons.org/${slug}/${slug}`
  );
  return (
    <section className="mt-10 md:mt-12">
      <div className="flex  flex-col-reverse md:flex-row items-center justify-between">
        <div className="w-[100%] md:w-[35%]">
          <div className="w-full">
            <IconCloud images={images} />
          </div>
        </div>
        <div className="w-[100%] md:w-[65%]">
          <h2 className="font-bold text-2xl md:text-4xl mb-3 md:mb-5">
            Tech Stack & Expertise
          </h2>
          <p>
            I’m a full-stack developer specializing in the MERN stack (MongoDB,
            Express.js, React.js, Node.js) along with Next.js, Redux,
            TypeScript, and MySQL, building scalable, high-performance web
            applications. <br />
            🔹Frontend: React.js, Next.js, Tailwind CSS, Redux, TypeScript{" "}
            <br />
            🔹Backend: Node.js, Express.js, MongoDB, MySQL <br /> 🔹Tools &
            APIs: Git, RESTful APIs, Cloudinary, Firebase With experience in
            university management systems, e-commerce platforms, and dashboards,
            I thrive on building modern web solutions. Currently, I’m enhancing
            my skills in GSAP animations and Redux Toolkit Query to create even
            more dynamic applications.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Skills;
