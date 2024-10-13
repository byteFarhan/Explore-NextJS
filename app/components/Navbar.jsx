"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const routes = [
  {
    pathName: "Home",
    path: "/",
  },
  {
    pathName: "About",
    path: "/about",
  },
  {
    pathName: "Blogs",
    path: "/blogs",
  },
  {
    pathName: "Posts",
    path: "/posts",
  },
  {
    pathName: "Categories",
    path: "/categories",
  },
];
const Navbar = () => {
  const pathName = usePathname();

  return (
    <nav className="flex gap-6 list-none">
      {routes.map((route) => (
        <li key={route.path}>
          <Link
            className={
              pathName === route.path ? "text-blue-700 font-medium" : ""
            }
            href={route.path}
          >
            {route.pathName}
          </Link>
        </li>
      ))}
      {/* <li>
          <Link href={"/"}>Home</Link>
        </li>
        |
        <li>
          <Link href={"/about"}>About</Link>
        </li>
        |
        <li>
          <Link href={"/blogs"}>Blogs</Link>
        </li>
        |
        <li>
          <Link href={"/posts"}>Posts</Link>
        </li> */}
    </nav>
  );
};

export default Navbar;
