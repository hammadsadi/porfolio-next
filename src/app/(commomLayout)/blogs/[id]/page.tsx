import React from "react";

const BlogDetails = () => {
  return (
    <section className="mt-10 md:mt-12">
      <div>
        <img
          src="https://images.unsplash.com/photo-1601506521937-0121a7fc2a6b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fHZpZGVvZ3JhcGh5fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
          className="group-hover:scale-110 h-full w-full object-cover duration-200"
        />
        <div>
          <h2 className="text-sm">Hammadsadi</h2>
          <data value="" className="text-xs">
            22-33-2025
          </data>
        </div>
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
        </div>
      </div>
    </section>
  );
};

export default BlogDetails;
