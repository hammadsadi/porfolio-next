import BlogCard from "@/components/portfolioCompnent/BlogCard/BlogCard";
import { TBlogPost } from "@/types/index.types";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const BlogPage = async () => {
  const res = await fetch("https://portfolio-api-opal.vercel.app/api/v1/blog");
  const blogs = await res.json();
  return (
    <section className="mt-10 md:mt-12">
      <div>
        <h2 className="font-bold capitalize text-2xl md:text-4xl mb-10 md:mb-14 text-center">
          Latest Blogs
        </h2>
        {/* Blog Data */}
        <section className=" dark:text-white">
          <div className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12">
            {blogs?.data?.slice(0, 1)?.map((item: TBlogPost) => (
              <Link
                key={item?._id}
                href={`/blogs/${item?._id}`}
                className="block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 "
              >
                <Image
                  src={item?.image}
                  width={100}
                  height={100}
                  alt={item?.image}
                  className="object-cover w-full h-64 rounded sm:h-96 lg:col-span-7 dark:bg-gray-500"
                />
                <div className="p-6 space-y-2 lg:col-span-5">
                  <h3 className="text-2xl font-semibold sm:text-4xl group-hover:underline group-focus:underline">
                    {item?.title}
                  </h3>
                  <span className="text-xs dark:text-gray-600">
                    February 19, 2021
                  </span>
                  <p>{item?.description}</p>
                </div>
              </Link>
            ))}

            <div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {blogs?.data?.slice(1)?.map((item: TBlogPost) => (
                <BlogCard key={item?._id} blog={item} />
              ))}
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};

export default BlogPage;
