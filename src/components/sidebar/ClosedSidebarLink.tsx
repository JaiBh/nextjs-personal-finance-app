"use client";

import { IconType } from "react-icons";
import { usePathname } from "next/navigation";
import RouteLink from "../RouteLink";

interface LinkProps {
  href: string;
  Icon: IconType;
}

function ClosedSidebarLink(props: LinkProps) {
  const pathname = usePathname();
  const { Icon, href } = props;
  const active = pathname === href;
  return (
    <li
      className={`px-6 py-4 transition-all rounded-r-xl ${active ? "bg-white border-l-4 border-secondary-green" : "text-grey-300 hover:text-white"}`}
    >
      <RouteLink href={href} className="flex justify-center">
        <Icon className={`w-6 h-6 ${active && "text-foreground"}`}></Icon>
      </RouteLink>
    </li>
  );
}
export default ClosedSidebarLink;
