import { Roboto } from "next/font/google";
import Link from "next/link";
import React from "react";

const roboto = Roboto({
  weight: ["400", "500", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "About",
  description: "This is about us page!",
  keywords: "This is about us page".split(" "),
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
      <div className={`${roboto.className} font-medium italic `}>
        {children}
      </div>
    </div>
  );
};

export default AboutLayout;
