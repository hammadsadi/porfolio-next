import BlogCard from "@/components/portfolioCompnent/BlogCard/BlogCard";
import React from "react";

const BlogPage = () => {
  return (
    <section className="mt-10 md:mt-12">
      <div>
        <h2 className="font-bold capitalize text-2xl md:text-4xl mb-10 md:mb-14 text-center">
          Latest Blogs
        </h2>
        {/* Blog Data */}
        <section className=" dark:text-white">
          <div className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12">
            <a
              rel="noopener noreferrer"
              href="#"
              className="block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 "
            >
              <img
                src="https://source.unsplash.com/random/480x360"
                alt=""
                className="object-cover w-full h-64 rounded sm:h-96 lg:col-span-7 dark:bg-gray-500"
              />
              <div className="p-6 space-y-2 lg:col-span-5">
                <h3 className="text-2xl font-semibold sm:text-4xl group-hover:underline group-focus:underline">
                  Noster tincidunt reprimique ad pro
                </h3>
                <span className="text-xs dark:text-gray-600">
                  February 19, 2021
                </span>
                <p>
                  Ei delenit sensibus liberavisse pri. Quod suscipit no nam. Est
                  in graece fuisset, eos affert putent doctus id.
                </p>
              </div>
            </a>
            <div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <BlogCard />
              <BlogCard />
              <BlogCard />
              <BlogCard />
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};

export default BlogPage;
