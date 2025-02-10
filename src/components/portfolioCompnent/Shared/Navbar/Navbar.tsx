import Link from "next/link";
import React from "react";
import PortfolioTheme from "../PortfolioTheme";

const Navbar = () => {
  return (
    <div className="mt-4">
      <nav className="max-w-lg mx-auto py-2 px-6 rounded-full border">
        <ul className="flex items-center justify-between">
          <li>
            <Link href="">Project</Link>
          </li>
          <li>
            <Link href="">Project</Link>
          </li>
          <li>
            <Link href="">Project</Link>
          </li>
          <li>
            <Link href="">Project</Link>
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
