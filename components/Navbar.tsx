"use client";
import Link from "next/link";
import React from "react";
import ThemeSwitcher from "./ThemeSwitcher";
import Image from "next/image";
import { usePathname } from "next/navigation";
import img from "../public/test.png";
const Navbar = () => {
  const pathname = usePathname().split("/")[1];
  return (
    <header className="px-10 md:px-[20%] shadow-sm border-b border-gray-100/50 dark:border-gray-600 sticky top-0 left-0 bg-white dark:bg-black">
      <div className="flex justify-between items-center">
        <Link href="/">
          <Image className="size-20 object-contain" src={img} alt="logo" />
        </Link>
        <ThemeSwitcher />
      </div>
    </header>
  );
};

export default Navbar;
