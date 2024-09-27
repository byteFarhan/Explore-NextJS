import Link from "next/link";
import React from "react";

export const metadata = {
  title: "About Us",
  description: "This is about us page!",
};

const AboutLayout = ({ children }) => {
  return (
    <div>
      <nav className="flex gap-6 list-none">
        <li>
          <Link href={"/about/vision"}>Vision</Link>
        </li>
        |
        <li>
          <Link href={"/about/vision/mission"}>Mission</Link>
        </li>
      </nav>
      <hr />
      <div>{children}</div>
    </div>
  );
};

export default AboutLayout;
