"use client";
import Link from "next/link";
import React from "react";
import PortfolioTheme from "../PortfolioTheme";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();
  return (
    <div className="mt-4">
      <nav className="max-w-lg mx-auto py-2 px-6 rounded-full border">
        <ul className="flex items-center justify-between">
          <li>
            <Link
              href="/project"
              className={`${pathname === "/project" ? "underline" : ""}`}
            >
              Project
            </Link>
          </li>
          <li>
            <Link
              href="/blogs"
              className={`${pathname === "/blogs" ? "underline" : ""}`}
            >
              Blogs
            </Link>
          </li>

          <li>
            <Link
              href="/contact"
              className={`${pathname === "/contact" ? "underline" : ""}`}
            >
              Contact
            </Link>
          </li>

          <li>
            <Link href="/dashboard">Dashboard</Link>
          </li>
          <li>
            <PortfolioTheme />
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
