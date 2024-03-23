import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
} from "@/components/ui/card";
import { BookmarkCheck, Search, WalletCards } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <div className="text-center my-5 text-3xl font-extrabold">
        Hire Your Dream Car
      </div>

      <div className="text-center text-lg w-[600px] text-zinc-600 m-auto">
        Are you wondering where you would hire the car of your dreams. Look no
        further , this is your number one spot . You can hire from this platform or
        contact us via the whatsapp icon by clicking it.
      </div>

      <div className="my-5">
        <Card className="w-[500px]  m-auto">
          <CardHeader>
            <CardDescription className="text-center">
              Hire your dream car in 3 steps
            </CardDescription>
          </CardHeader>
          <CardContent className="grid grid-cols-3 gap-1">
            <div className="col-span-1 text-center text-gray-500 font-bold flex items-center justify-center flex-col">
              <Search className="h-[50px] w-[50px]" />
              <div>Find it</div>
            </div>

            <div className="col-span-1 text-center text-sky-500 font-bold flex items-center justify-center flex-col">
              <BookmarkCheck className="h-[50px] w-[50px]" />
              <div>Book it.</div>
            </div>

            <div className="col-span-1 text-center text-emerald-500 font-bold flex items-center justify-center flex-col">
              <WalletCards className="h-[50px]  w-[50px]" />
              <div>Make payment</div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="flex justify-center items-center">
        <Button asChild className='w-[300px]' variant='destructive'>
          <Link href='/vehicles'>
          Get started
          </Link>
        </Button>
      </div>

      

      <div className="relative aspect-video">
        <Image
          src="/home-image.png"
          alt="home-image"
          fill
          className="object-contain"
        />
      </div>
    </div>
  );
}
