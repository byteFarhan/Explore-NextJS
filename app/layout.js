"use client";
import localFont from "next/font/local";
import "./globals.css";
import Link from "next/link";
import { usePathname } from "next/navigation";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const metadata = {
  title: "Explore Next JS",
  description: "Generated by create next app",
};
// export const metadata = {
//   title: "Explore Next JS",
//   description: "Generated by create next app",
// };

export default function RootLayout({ children }) {
  const pathName = usePathname();
  // console.log(pathName);
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
  ];
  return (
    <html lang="en" className="p-6 lg:p-8">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <nav className="flex gap-6 list-none">
          {routes.map((route) => (
            <li>
              <Link
                className={
                  pathName === route.path && "text-blue-700 font-medium"
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
        <hr className="bg-black h-[2px]" />
        <main className="mt-10 space-y-5">{children}</main>
      </body>
    </html>
  );
}
