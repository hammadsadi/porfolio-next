import Image from "next/image";
import React from "react";
// Dynamic Metadata
export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
   const { id } = await params;
   const res = await fetch(
     `https://portfolio-api-opal.vercel.app/api/v1/blog/${id}`
   );
   const blog = await res.json();
  return {
    title: blog?.data?.title,
    description: blog?.data?.description
  };
}
const BlogDetails = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;
  const res = await fetch(
    `https://portfolio-api-opal.vercel.app/api/v1/blog/${id}`
  );
  const blog = await res.json();
  console.log(blog);
  return (
    <section className="mt-10 md:mt-12">
      <div>
        <Image
          src={blog?.data?.image}
          width={100}
          height={100}
          alt={blog?.data?.title}
          className="group-hover:scale-110 h-full w-full object-cover duration-200"
        />
        <div className="mt-2">
          <h2 className="text-sm">{blog?.data?.userName}</h2>
          <data value="" className="text-xs">
            22-33-2025
          </data>
        </div>
        <div className="mt-4 md:mt-6">
          <h2
            className="
          md:text-3xl text-lg font-bold mb-2"
          >
            {blog?.data?.title}
          </h2>
          <p className="text-base">{blog?.data?.description}</p>
        </div>
      </div>
    </section>
  );
};

export default BlogDetails;
