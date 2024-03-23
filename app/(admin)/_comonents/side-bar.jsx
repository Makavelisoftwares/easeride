import { ScrollArea } from "@/components/ui/scroll-area";
import { UserBtn } from "@/components/user-btn/user-btn";
import Image from "next/image";
import { Album, LayoutDashboard, Trello, Truck } from "lucide-react";
import { Links } from "./links";

export const SideBar = () => {
  const items = [
    {
      name: "Dashboard",
      href: "/dashboard",
      icon: <LayoutDashboard className="text-zinc-600/50" />,
    },
    {
      name: "Brands",
      href: "/brands",
      icon: <Trello className="text-zinc-600/50" />,
    },
    {
      name: "Cars",
      href: "/cars",
      icon: <Truck className="text-zinc-600/50" />,
    },
    {
      name: "Bookings",
      href: "/bookings",
      icon: <Album className="text-zinc-600/50" />,
    },
  ];

  return (
    <div className="flex flex-col">
      <div className="relative my-3 ml-4 h-[30px] flex items-center justify-center w-[30px]">
        <Image src="/logo.svg" alt="logo" fill className="object-contain" />
      </div>
      <ScrollArea className="w-full h-[85vh]">
        <div>
          <Links items={items} />
        </div>
      </ScrollArea>

      
    </div>
  );
};
