import React from "react";
import github from "@/assets/icons/Github_dark.svg";
import linkIcon from "@/assets/icons/icons8-external-link.svg";
import Link from "next/link";
import Image from "next/image";
import { FaExternalLinkAlt } from "react-icons/fa";

import { FaGithub } from "react-icons/fa";
const ProjectPageCard = () => {
  return (
    <div className="group cursor overflow-hidden rounded-2xl shadow-xl duration-200 hover:-translate-y-4">
      <div className="flex h-60 flex-col justify-between overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1601506521937-0121a7fc2a6b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fHZpZGVvZ3JhcGh5fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
          className="group-hover:scale-110 h-full w-full object-cover duration-200"
        />
      </div>
      <div className="flex-1 overflow-hidden bg-gray-800/5 px-6 py-8">
        <h5 className=" mb-4 text-xl font-bold">
          Video 6: Learn more about marketing
        </h5>
        <p className="mb-8 text-gray-600">
          Cras ultricies ligula sed magna dictum porta. Praesent sapien massa,
          convallis a pellentesque nec, egestas non nisi.
        </p>
        <div className="flex justify-between">
          <Link
            href="#"
            className="group text-sm gap-1 font-bold flex items-center"
          >
            <FaExternalLinkAlt />
            <span> Live Link</span>
          </Link>
          <div className="max-w-full flex-none lg:px-4">
            <div className="flex flex-row gap-2">
              <Link href="#" className="flex items-center gap-1">
                <FaGithub className="text-xs" />
                <span className="text-xs">Server</span>
              </Link>
              <Link href="#" className="flex items-center gap-1">
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
