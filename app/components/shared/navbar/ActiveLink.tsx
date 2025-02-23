"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface Props {
  text: string;
  href: string;
  icon: React.ReactNode;
}

export const ActiveLink = ({ href, icon, text }: Props) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <>
      <li>
        <Link
          href={href}
          className={`block py-2 px-3 md:p-0 rounded-sm transition-colors ${
            isActive
              ? "text-blue-700 font-semibold border-b-2 border-blue-700"
              : "text-gray-900 dark:text-white hover:text-blue-700 dark:hover:text-blue-500"
          }`}
        >
          <div className="flex items-center">
            {icon}
            <span className="ml-2">{text}</span>
          </div>
        </Link>
      </li>
    </>
  );
};
