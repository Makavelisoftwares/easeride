'use client'

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const Links = ({ items }) => {
    const path=usePathname()
  return (
    <div>
      {items?.map((item, i) => (
        <Link className={cn("flex w-full text-xl items-center rounded-sm p-2 space-x-2 mx-2 mt-2",
        path==item?.href && 'font-bold text-rose-500'
        )} key={i} href={item?.href}>
          <div>{item?.icon}</div>
          <div>{item?.name}</div>
        </Link>
      ))}
    </div>
  );
};
