import React from "react";
import doodle from "@/assets/images/doodle.svg";
import Image from "next/image";
const COntactPage = () => {
  return (
    <section className="mt-10 md:mt-12">
      <div>
        <h2 className="font-bold capitalize text-2xl md:text-4xl mb-10 md:mb-14 text-center">
          Contact Me
        </h2>
        <div className="grid max-w-screen-xl grid-cols-1 gap-8 px-8 py-16 mx-auto rounded-lg md:grid-cols-2 md:px-12 lg:px-16 xl:px-32">
          <div className="flex flex-col gap-14">
            <div className="space-y-2">
              <h2 className="text-4xl font-bold leading-tight lg:text-5xl">
                Let's talk!
              </h2>
              <div className="">Vivamus in nisl metus? Phasellus.</div>
            </div>
            <Image src={doodle} alt="" width={300} height={400} />
          </div>
          <form className="space-y-6 border p-4 md:p-8 rounded">
            <div>
              <label htmlFor="name" className="text-sm">
                Full name
              </label>
              <input
                id="name"
                type="text"
                placeholder=""
                className="w-full p-3 rounded border focus:outline-none"
              />
            </div>
            <div>
              <label htmlFor="email" className="text-sm">
                Email
              </label>
              <input
                id="email"
                type="email"
                className="w-full p-3 rounded border focus:outline-none"
              />
            </div>
            <div>
              <label htmlFor="message" className="text-sm">
                Message
              </label>
              <textarea
                id="message"
                rows="3"
                className="w-full p-3 rounded border focus:outline-none "
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full p-3 text-sm font-bold tracking-wide uppercase rounded dark:text-gray-50 text-white bg-[#09090b] dark:bg-[#121212]"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
    //
  );
};

export default COntactPage;
