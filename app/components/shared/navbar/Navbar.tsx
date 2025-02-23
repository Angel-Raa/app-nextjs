import {
  CalendarIcon,
  HomeIcon,
  PeopleIcon,
  PersonIcon,
} from "@primer/octicons-react";
import Link from "next/link";
import { ActiveLink } from "./ActiveLink";

interface NavbarLinks {
  text: string;
  href: string;
  icon: React.ReactNode;
}

const navbarLins: Array<NavbarLinks> = [
  {
    text: "About",
    href: "/about",
    icon: <PersonIcon size={24} />,
  },
  {
    text: "pricing",
    href: "/pricing",
    icon: <CalendarIcon size={24} />,
  },
  {
    text: "Contact",
    href: "/contact",
    icon: <PeopleIcon size={24} />,
  },
];
export const Navbar = () => {
  console.log("hey");

  return (
    <>
      <nav className="bg-white border-gray-200 dark:bg-gray-900">
        <div className="max-w-screen-xl flex items-center justify-between mx-auto p-4">
          <div className="ml-auto">
            <Link
              href={"/"}
              className="block py-2 px-3 md:p-2 text-white rounded-sm md:bg-transparent
          md:text-blue-700 md:dark:text-blue-500"
            >
              <HomeIcon size={24} />
            </Link>
          </div>
          <div className="flex-grow flex justify-center">
            <ul
              className="flex flex-col md:flex-row md:space-x-8 font-medium p-4 md:p-0 mt-4 md:mt-0 border border-gray-100
          rounded-lg bg-gray-50 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700"
            >
              {navbarLins.map((link) => (
                <ActiveLink key={link.href} {...link} />
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};
