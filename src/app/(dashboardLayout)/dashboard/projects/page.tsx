"use client";

import { Button } from "@/components/ui/button";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { TProject } from "@/types/index.types";
import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { FaTrashAlt } from "react-icons/fa";
import { FaRegPenToSquare } from "react-icons/fa6";

const ProjectPage = () => {
  const [projects, setProject] = useState<TProject[]>([]);
  const { data: session } = useSession();

  // Handle Delete Project
  const handleDeleteProject = async (id: string) => {
    const res = await fetch(
      `https://portfolio-api-opal.vercel.app/api/v1/project/${id}`,
      {
        method: "DELETE",
      }
    );
    const projectData = await res.json();
    if (projectData?.data) {
      return toast.success("Project Deleted Successful");
    } else {
      toast.error("Failed to Delete Project");
    }
  };
  useEffect(() => {
    // Get All Blogs
    const allBlogs = async () => {
      const res = await fetch(
        "https://portfolio-api-opal.vercel.app/api/v1/project"
      );
      const result = await res.json();
      setProject(result?.data);
      return result;
    };
    allBlogs();
  }, [projects]);

  return (
    <div className={`${session?.user ? "flex-1 md:ml-[270px]" : ""}`}>
      <div className="text-end mb-2">
        <Link href="/dashboard/projects/create">
          <Button>Create Project</Button>
        </Link>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Image</TableHead>
            <TableHead>Title</TableHead>
            <TableHead>Description</TableHead>
            <TableHead className="text-right">Writer</TableHead>
            <TableHead className="text-right">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {projects?.map((item: TProject) => (
            <TableRow key={item?._id}>
              <TableCell className="font-medium">
                <Image
                  src={item?.image}
                  width={100}
                  height={100}
                  alt={item.title}
                />
              </TableCell>
              <TableCell>{item?.title?.slice(0, 10)}</TableCell>
              <TableCell>{item?.description?.slice(0, 30)}</TableCell>
              <TableCell className="text-right">
                <Link
                  href={item?.projectLiveLink}
                  className="bg-rose-500 rounded text-xs p-1"
                >
                  Live Link
                </Link>
              </TableCell>
              <TableCell className="text-right space-x-1">
                <Link href={`/dashboard/projects/${item?._id}`}>
                  <Button size="sm" className="bg-green-700 ">
                    <FaRegPenToSquare />
                  </Button>
                </Link>
                <Button
                  onClick={() => handleDeleteProject(item._id)}
                  size="sm"
                  className="bg-rose-500 "
                >
                  <FaTrashAlt />
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default ProjectPage;
