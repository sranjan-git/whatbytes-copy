"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { BarChart2, File, MedalIcon } from "lucide-react";
import type { FCProps } from "@/lib/types";

export const NavBar = () => {
  return (
    <nav className="lg:w-1/5 w-full lg:h-full h-fit lg:border-r-2 border-slate-100">
      <ul className="w-full flex lg:flex-col lg:pr-4 justify-evenly lg:mt-12 mt-2">
        <NavItem title="Dashboard" link="/dashboard">
          <BarChart2 className="hidden lg:block" />
        </NavItem>
        <NavItem title="Skill Test" link="/skill-test">
          <MedalIcon className="hidden lg:block" />
        </NavItem>
        <NavItem title="Internship" link="/internship">
          <File className="hidden lg:block" />
        </NavItem>
      </ul>
    </nav>
  );
};

const NavItem: FCProps<{ title: string; link: string }> = ({
  children,
  title,
  link,
}) => {
  const pathname = usePathname();

  return (
    <Link
      href={link}
      className={`lg:text-lg font-bold flex gap-4 lg:p-5 p-2 px-4 rounded-full lg:rounded-tl-none lg:rounded-bl-none  ${
        pathname === link ? "text-blue-700 bg-slate-100" : "text-slate-500"
      }`}
    >
      {children}
      {title}
    </Link>
  );
};
