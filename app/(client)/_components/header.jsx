import { Button } from "@/components/ui/button";
import { UserBtn } from "@/components/user-btn/user-btn";
import { db } from "@/lib/db/db";
import { auth } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";

export const Header = async () => {
  const { userId } = auth();

  const Links = [
    {
      name: "Cars",
      href: "/vehicles",
    },
    {
      name: "History",
      href: "/history",
    },
  ];

  return (
    <div className="flex items-center border-b border-zinc-300 py-3 justify-between">
      <div className="relative h-[50px] w-[50px]">
        <Link href="/" className="flex items-center space-x-2">
          <Image src="/logo.svg" fill className="object-contain" alt="logo" />
        </Link>
      </div>

      <div>
        {userId == null ? (
          <div>
            <Button asChild variant="destructive">
              <Link href="/sign-in">Sign-in</Link>
            </Button>
          </div>
        ) : (
          <div className="flex items-center space-x-3">
            <div className="flex items-center space-x-1">
              {Links.map((item, i) => (
                <Button key={i} variant="link" asChild size="sm">
                  <Link href={item?.href}>{item?.name}</Link>
                </Button>
              ))}
            </div>

            <div>
              <UserBtn />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
