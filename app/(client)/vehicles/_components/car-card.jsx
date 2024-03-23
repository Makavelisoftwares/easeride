import { Card, CardContent, CardFooter } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

export const CarCard = ({ data }) => {
  return (
    <div className="grid md:grid-cols-3 grid-cols-1 gap-3 my-2 ">
      {data?.map((item, i) => (
        <Link
          href={`/vehicles/${item?.id}`}
          className="col-span-1 pt-2 h-[75vh]"
          key={i}
        >
          <Card>
            <CardContent>
              <div className="relative h-[40vh] ">
                <Image
                  src={item?.image}
                  fill
                  alt={item?.name}
                  className="object-cover"
                />
              </div>

              <div className="flex items-center mt-1 justify-between">
                <div className="bg-sky-100 p-1 font-semibold text-sm">
                  {item?.year}
                </div>
                <div className="text-xl font-bold">{item?.name}</div>
              </div>

              <div className="flex items-center mt-1 justify-between">
                <div className="bg-sky-100 p-1 font-semibold text-sm">
                  {item?.transmission}
                </div>
                <div className="bg-sky-100 p-1 font-semibold text-sm">
                  {item?.fuel}
                </div>
                <div className="bg-sky-100 p-1 font-semibold text-sm">
                  {item?.regno}
                </div>
              </div>

              <div className="text-sm text-neutral-600 mt-2">
                {item?.description?.slice(0, 20)}...
              </div>
            </CardContent>
            <CardFooter>
              <div className="text-xl font-extrabold">
                ${item?.priceperhour}/hr
              </div>
            </CardFooter>
          </Card>
        </Link>
      ))}
    </div>
  );
};
