"use client";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import { AiOutlineBars } from "react-icons/ai";
import { GrLogout } from "react-icons/gr";

const Sidebar = ({}) => {
  const [isActive, setActive] = useState(false);
  const { data: userInfo } = useSession();
  const pathName = usePathname();
  console.log(pathName);
  const handleToggle = () => {
    setActive(!isActive);
  };
  return (
    <>
      {userInfo?.user ? (
        <>
          {/* Small Screen Navbar */}
          <div className="bg-gray-100 dark:bg-[#18181a] text-gray-800 flex justify-between md:hidden z-[50] relative">
            <div>
              <div className="block cursor-pointer p-4 font-bold">
                <div className="flex justify-center items-center cursor-pointer text-primary">
                  {/* <IoIosBicycle className="md:text-4xl text-base font-bold" /> */}
                  <Link
                    href="/"
                    className="md:text-2xl text-base font-bold font-orbitron uppercase"
                  >
                    Dashbaord
                  </Link>
                </div>
              </div>
            </div>

            <button
              onClick={handleToggle}
              className="mobile-menu-button p-4 focus:outline-none dark:focus:bg-[#09090b] dark:text-white text-[#09090b] focus:text-[#09090b]"
            >
              <AiOutlineBars className="h-5 w-5" />
            </button>
          </div>

          {/* Sidebar */}
          <div
            className={`z-10 md:fixed flex flex-col justify-between overflow-x-hidden bg-[#f4f4f5] dark:bg-[#18181a] w-[270px] space-y-6 px-2 py-4 absolute inset-y-0 left-0 transform ${
              isActive && "-translate-x-full"
            }  md:translate-x-0  transition duration-200 ease-in-out`}
          >
            <div>
              <div>
                <div className="w-full hidden bg-primary/10 shadow-md md:flex px-4 py-2 rounded-lg justify-center items-center  mx-auto">
                  <div className="flex justify-center  items-center cursor-pointer text-primary">
                    {/* <IoIosBicycle className="md:text-4xl text-base font-bold" /> */}
                    <Link
                      href="/"
                      className="md:text-2xl text-base font-bold font-orbitron uppercase"
                    >
                      Dashbaord
                    </Link>
                  </div>
                </div>
              </div>

              {/* Nav Items */}
              <div className="flex flex-col justify-between flex-1 mt-6">
                {/* Conditional toggle button here.. */}

                {/*  Menu Items */}

                <nav>
                  <div>
                    <Link
                      href="/dashboard/blogs"
                      className={`flex items-center px-4 py-2 my-5  transition-colors duration-300 transform  dark:hover:bg-primary/10 hover:bg-[#09090b] hover:text-white  ${
                        pathName === "/dashboard/blogs"
                          ? "dark:bg-primary/10 bg-[#09090b] text-white"
                          : ""
                      }`}
                    >
                      {/* <MdShoppingCartCheckout className="w-5 h-5" /> */}

                      <span className="mx-4 font-medium">Blog Management</span>
                    </Link>
                    <Link
                      href="/dashboard/projects"
                      className={`flex items-center px-4 py-2 my-5  transition-colors duration-300 transform  dark:hover:bg-primary/10 hover:bg-[#09090b] hover:text-white  ${
                        pathName === "/dashboard/projects"
                          ? "dark:bg-primary/10 bg-[#09090b] text-white"
                          : ""
                      }`}
                    >
                      {/* <MdShoppingCartCheckout className="w-5 h-5" /> */}

                      <span className="mx-4 font-medium">
                        Project Management
                      </span>
                    </Link>
                    <Link
                      href="/dashboard/messages"
                      className={`flex items-center px-4 py-2 my-5  transition-colors duration-300 transform  dark:hover:bg-primary/10 hover:bg-[#09090b] hover:text-white  ${
                        pathName === "/dashboard/messages"
                          ? "dark:bg-primary/10 bg-[#09090b] text-white"
                          : ""
                      }`}
                    >
                      {/* <MdShoppingCartCheckout className="w-5 h-5" /> */}

                      <span className="mx-4 font-medium">
                        Message Management
                      </span>
                    </Link>
                  </div>
                </nav>
              </div>
            </div>

            <div>
              <hr />

              <Link
                href="/dashboard/messages"
                className={`flex items-center px-4 py-2 my-5  transition-colors duration-300 transform  dark:hover:bg-primary/10 hover:bg-[#09090b] hover:text-white  ${
                  pathName === "/dashboard/messagesss"
                    ? "dark:bg-primary/10 bg-[#09090b] text-white"
                    : ""
                }`}
              >
                {/* <MdShoppingCartCheckout className="w-5 h-5" /> */}
                <Image
                  src={userInfo?.user?.image || ""}
                  width={100}
                  height={100}
                  alt={userInfo?.user?.name || ""}
                  className="w-8 h-8"
                />

                <span className="mx-4 font-medium">{userInfo?.user?.name}</span>
              </Link>

              <button
                onClick={() => signOut()}
                className="flex w-full items-center px-4 py-2 mt-5 text-gray-600 bg-primary/10 hover:bg-primary dark:hover:bg-primary/10 dark:text-white hover:text-white transition-colors duration-300 transform"
              >
                <GrLogout className="w-5 h-5" />

                <span className="mx-4 font-medium">Logout</span>
              </button>
            </div>
          </div>
        </>
      ) : (
        ""
      )}
    </>
  );
};

export default Sidebar;
