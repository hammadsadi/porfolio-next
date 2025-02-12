"use client";
import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useSession } from "next-auth/react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import toast from "react-hot-toast";
import uploadImage from "@/utils/uploadImageToCloudinary";
import { Textarea } from "@/components/ui/textarea";
import { useParams, useRouter } from "next/navigation";
import { TProject } from "@/types/index.types";
const UpdateProjectPage = () => {
  const { data: session } = useSession();
  const [singleProject, setSingleProject] = useState<TProject | null>(null);
  const { id } = useParams();
  const router = useRouter();
  const form = useForm();
  // Handle Submit
  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const {
      title,
      description,
      projectFeatures,
      technologies,
      fronEndGithub,
      backendEndGithub,
      projectLiveLink,
    } = data;

    let updateImageUrl = singleProject?.image;
    if (data?.image) {
      const imgUrl = await uploadImage(data?.image);
      updateImageUrl = imgUrl;
    }
    const projectInfo = {
      title,
      description,
      image: updateImageUrl,
      userEmail: session?.user?.email,
      projectFeatures,
      technologies,
      fronEndGithub,
      backendEndGithub,
      projectLiveLink,
    };
    const res = await fetch(
      `https://portfolio-api-opal.vercel.app/api/v1/project/${id}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(projectInfo),
      }
    );
    const blogData = await res.json();
    if (blogData?.data) {
      router.push("/dashboard/projects");
      return toast.success("Project Updated Successful");
    } else {
      toast.error("Failed to Update Project");
    }
  };

  useEffect(() => {
    const getsingleProject = async () => {
      const res = await fetch(
        `https://portfolio-api-opal.vercel.app/api/v1/project/${id}`
      );
      const singleProject = await res.json();
      setSingleProject(singleProject?.data);
    };
    getsingleProject();
  }, [id]);
  return (
    <div className={`${session?.user ? "flex-1 md:ml-[270px]" : ""}`}>
      <div className="max-w-lg mx-auto p-4 border">
        <div>
          <h2 className="text-xl md:text-2xl text-center">
            Update Project Info
          </h2>
        </div>
        <Form {...form}>
          <form className="space-y-3" onSubmit={form.handleSubmit(onSubmit)}>
            <div></div>
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Title</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      value={field.value || singleProject?.title || ""}
                    />
                  </FormControl>
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Description/Content</FormLabel>
                  <FormControl>
                    <Textarea
                      {...field}
                      value={field.value || singleProject?.description || ""}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="projectFeatures"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    Project Features ( Each Features Separated by Comma )
                  </FormLabel>
                  <FormControl>
                    <Textarea
                      {...field}
                      value={
                        field.value || singleProject?.projectFeatures || ""
                      }
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="technologies"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    Technologies ( Each Technologies Separated by Comma )
                  </FormLabel>
                  <FormControl>
                    <Textarea
                      {...field}
                      value={field.value || singleProject?.technologies || ""}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="fronEndGithub"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Front End Github Link</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      value={field.value || singleProject?.fronEndGithub || ""}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="backendEndGithub"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Backend End Github Link</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      value={
                        field.value || singleProject?.backendEndGithub || ""
                      }
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="projectLiveLink"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Project Live Link</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      value={
                        field.value || singleProject?.projectLiveLink || ""
                      }
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="image"
              render={({ field: { onChange, value, ...field } }) => (
                <FormItem>
                  <FormLabel>Image</FormLabel>
                  <FormControl>
                    <Input
                      type="file"
                      {...field}
                      onChange={(e) => onChange(e.target.files?.[0])}
                      value={value?.fileName}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            <Button type="submit">Update</Button>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default UpdateProjectPage;
