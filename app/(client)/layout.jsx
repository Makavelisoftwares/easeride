import React from "react";
import { Header } from "./_components/header";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { auth, currentUser } from "@clerk/nextjs";
import { db } from "@/lib/db/db";
import { redirect } from "next/navigation";

async function ClientLayout({ children }) {
  

  return (
    <div className="w-[1000px] relative m-auto">
      <div className="">
        <Header />
      </div>
      <div className="fixed z-20 bottom-8 right-5">
        <Button className="bg-transparent hover:bg-transparent" asChild>
          <Link
            href="https://wa.me/254719417886"
            className="relative h-[50px] w-[50px]"
            target="_blank"
          >
            <Image
              src={"/whatsapp.svg"}
              alt="whatsapp"
              className="object-contain"
              fill
            />
          </Link>
        </Button>
      </div>
      {children}

      <div className="border-t flex items-center justify-between border-zinc-300 p-2 text-sm text-zinc-600">
        <div>@2024. All rights reserved</div>

        <div className="flex items-center space-x-5">
          <div>Terms of servive</div>
          <div>privacy</div>
        </div>
      </div>
    </div>
  );
}

export default ClientLayout;
