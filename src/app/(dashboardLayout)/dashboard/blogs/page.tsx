"use client";
import MyModal from "@/components/portfolioCompnent/Shared/MyModal/MyModal";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Textarea } from "@/components/ui/textarea";
import { TBlogPost } from "@/types/index.types";
import uploadImage from "@/utils/uploadImageToCloudinary";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { FaTrashAlt } from "react-icons/fa";
import { FaRegPenToSquare } from "react-icons/fa6";

const BlogPage = () => {
  const [isOpen, setIsopen] = useState(false);
  const [isOpenUpdateModal, setIsopenUpdateModal] = useState(false);
  const [blogs, setBlogs] = useState<TBlogPost[]>([]);
  const [singleBlog, setSingleBlog] = useState<TBlogPost | null>(null);
  const { data: session } = useSession();
  const form = useForm();
  const handleOpenModal = () => {
    setIsopen(true);
  };
  // Handle Submit
  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const { title, description, image, category } = data;
    if (!title || !description || !image || !category) {
      return toast.error("All Fields Are Requied");
    }
    const imgUrl = await uploadImage(data?.image);
    const blogInfo = {
      title,
      description,
      category,
      image: imgUrl,
      userEmail: session?.user?.email,
      userName: session?.user?.name,
    };
    const res = await fetch(
      "https://portfolio-api-opal.vercel.app/api/v1/blog/create-blog",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(blogInfo),
      }
    );
    const blogData = await res.json();
    if (blogData?.data) {
      setBlogs((prevBlogs) => [...prevBlogs, blogData?.data]);
      setIsopen(false);
      return toast.success("Blog Created Successful");
    } else {
      toast.error("Failed to Create Blog");
      setIsopen(false);
    }
  };

  // Handle Submit Update Form
  const updateFormSubmit: SubmitHandler<FieldValues> = async (data) => {
    const { title, description, category } = data;
    let updateImageUrl = singleBlog?.image;
    if (data?.image) {
      const imgUrl = await uploadImage(data?.image);
      updateImageUrl = imgUrl;
    }
    const blogInfo = {
      title,
      description,
      image: updateImageUrl,
      userName: session?.user?.email,
      category,
    };
    const res = await fetch(
      `https://portfolio-api-opal.vercel.app/api/v1/blog/${singleBlog?._id}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(blogInfo),
      }
    );
    const blogData = await res.json();
    if (blogData?.data) {
      setIsopen(false);
      return toast.success("Blog Updated Successful");
    } else {
      toast.error("Failed to Update Blog");
      setIsopen(false);
    }
  };

  // Handle Update Modal
  const handleUpdateModal = async (id: string) => {
    setIsopenUpdateModal(!isOpenUpdateModal);
    const res = await fetch(
      `https://portfolio-api-opal.vercel.app/api/v1/blog/${id}`
    );
    const singleBlog = await res.json();
    setSingleBlog(singleBlog?.data);
  };

  // Handle Delete Blog
  const handleDeleteBlog = async (id: string) => {
    const res = await fetch(
      `https://portfolio-api-opal.vercel.app/api/v1/blog/${id}`,
      {
        method: "DELETE",
      }
    );
    const deletedData = await res.json();
    if (deletedData?.data) {
      return toast.success("Blog Deleted Successful");
    } else {
      toast.error("Failed to Delete Blog");
    }
  };
  useEffect(() => {
    // Get All Blogs
    const allBlogs = async () => {
      const res = await fetch(
        "https://portfolio-api-opal.vercel.app/api/v1/blog"
      );
      const result = await res.json();
      setBlogs(result?.data);
      return result;
    };
    allBlogs();
  }, [blogs]);
  return (
    <div className={`${session?.user ? "flex-1 md:ml-[270px]" : ""}`}>
      {/* Create Modal */}
      <MyModal
        diaglogTitle="Add New Blog"
        isOpen={isOpen}
        setIsOpen={setIsopen}
      >
        <Form {...form}>
          <form className="space-y-3" onSubmit={form.handleSubmit(onSubmit)}>
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Title</FormLabel>
                  <FormControl>
                    <Input {...field} value={field.value || ""} />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="category"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Category</FormLabel>
                  <FormControl>
                    <Input {...field} value={field.value || ""} />
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
                    <Textarea {...field} value={field.value || ""} />
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
            <Button type="submit">Create</Button>
          </form>
        </Form>
      </MyModal>

      {/* Update Modal */}
      <MyModal
        diaglogTitle="Update Blog Blog"
        isOpen={isOpenUpdateModal}
        setIsOpen={setIsopenUpdateModal}
      >
        <Form {...form}>
          <form
            className="space-y-3"
            onSubmit={form.handleSubmit(updateFormSubmit)}
          >
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Title</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      value={field.value || singleBlog?.title || ""}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="category"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Category</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      value={field.value || singleBlog?.category || ""}
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
                  <FormLabel>Description</FormLabel>
                  <FormControl>
                    <Textarea
                      {...field}
                      value={field.value || singleBlog?.description || ""}
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
      </MyModal>
      <div className="text-end mb-2">
        <Button onClick={handleOpenModal}>Create Blog</Button>
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
          {blogs.map((item: TBlogPost) => (
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
              <TableCell className="text-right">{item?.userName}</TableCell>
              <TableCell className="text-right space-x-1">
                <Button
                  onClick={() => handleUpdateModal(item._id)}
                  size="sm"
                  className="bg-green-700 "
                >
                  <FaRegPenToSquare />
                </Button>
                <Button
                  onClick={() => handleDeleteBlog(item._id)}
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

export default BlogPage;
