import { TBlogPost } from "@/types/index.types";
import Image from "next/image";
import Link from "next/link";

const BlogCard = ({ blog }: { blog: TBlogPost }) => {
  return (
    <Link
      href={`/blogs/${blog?._id}`}
      className="max-w-sm mx-auto group hover:no-underline focus:no-underline border rounded"
    >
      <Image
        src={blog?.image}
        width={100}
        height={100}
        alt={blog?.title}
        className="object-cover w-full rounded h-44 dark:bg-gray-500"
      />
      <div className="p-6 space-y-2">
        <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">
          {blog?.title}
        </h3>
        <span className="text-xs dark:text-gray-600">January 21, 2021</span>
        <p>{blog?.description}</p>
      </div>
    </Link>
  );
};

export default BlogCard;
