import React from "react";
import { SideBar } from "./_comonents/side-bar";
import { MobileToggle } from "@/components/mobile";
import { Profile } from "./_comonents/profile";
import { UserBtn } from "@/components/user-btn/user-btn";
import { CreateUser } from "@/lib/db/create-user";

async function AdminLayout({ children }) {
 await CreateUser()

  return (
    <div className="flex">
      <div className=" w-[200px] hidden md:flex h-screen fixed ">
        <SideBar />
      </div>

      <div className="md:pl-[200px] w-full">
        <div className=" flex items-center space-x-2 justify-end">
          
          <div className="p-4">
            <Profile />
          </div>
          <div>
            <UserBtn />
          </div>
        </div>
        <div className="p-3">
          <div className="md:hidden">
            <MobileToggle />
          </div>
          {children}
        </div>
      </div>
    </div>
  );
}

export default AdminLayout;
