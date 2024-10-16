"use client";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
// import { useRouter } from "next/router";
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
  const session = useSession();
  const router = useRouter();
  console.log(session);
  const handleLogin = () => {
    router.push("/api/auth/signin");
  };
  const handleLogout = () => {
    console.log("clicked");
  };

  return (
    <nav className="flex items-center justify-between mb-2">
      <ul className="flex gap-6 list-none">
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
      </ul>
      <div>
        {session.status === "unauthenticated" ? (
          <button
            onClick={handleLogin}
            className="px-4 py-2 text-lg font-medium text-white bg-black rounded-md"
          >
            Login
          </button>
        ) : (
          <button
            onClick={handleLogout}
            className="px-3 py-2 text-lg font-medium text-white bg-black rounded-md"
          >
            Logout
          </button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
