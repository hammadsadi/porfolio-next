import Link from "next/link";
import React from "react";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const ProjectDetails = () => {
  return (
    <section className="mt-10 md:mt-12">
      <div>
        <img
          src="https://images.unsplash.com/photo-1601506521937-0121a7fc2a6b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fHZpZGVvZ3JhcGh5fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
          className="group-hover:scale-110 h-full w-full object-cover duration-200"
        />
        <div className="mt-4 md:mt-6">
          <h2
            className="
          md:text-3xl text-lg font-bold mb-2"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
            similique
          </h2>
          <p className="text-base">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum,
            dolore? Similique deleniti accusantium atque cupiditate ducimus
            magni saepe sit. Architecto et inventore necessitatibus repudiandae,
            alias, officiis dolores atque placeat consequatur modi repellat
            accusantium, dolor nostrum. Dolores odio eos ut id.
          </p>

          <h5 className="text-lg md:text-xl font-bold my-2">
            Project Features
          </h5>
          <ul className="text-base">
            <li>Lorem ipsum dolor sit amet consectetur.</li>
            <li>Lorem ipsum dolor sit amet consectetur.</li>
            <li>Lorem ipsum dolor sit amet consectetur.</li>
            <li>Lorem ipsum dolor sit amet consectetur.</li>
          </ul>
          <h5 className="text-lg md:text-xl font-bold my-2">tectnologies</h5>
          <ul className="text-base">
            <li>Lorem ipsum dolor sit amet consectetur.</li>
            <li>Lorem ipsum dolor sit amet consectetur.</li>
            <li>Lorem ipsum dolor sit amet consectetur.</li>
            <li>Lorem ipsum dolor sit amet consectetur.</li>
          </ul>
          <div className="flex my-2 md:my-4">
            <Link
              href="#"
              className="group text-sm md:text-base gap-1 font-bold flex items-center"
            >
              <FaExternalLinkAlt />
              <span> Live Link</span>
            </Link>
            <div className="max-w-full flex-none lg:px-4">
              <div className="flex flex-row gap-2">
                <Link href="#" className="flex items-center gap-1">
                  <FaGithub className="text-xs md:text-base" />
                  <span className="text-xs md:text-base">Server</span>
                </Link>
                <Link href="#" className="flex items-center gap-1">
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
