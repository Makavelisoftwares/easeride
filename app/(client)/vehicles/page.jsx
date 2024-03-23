import { db } from "@/lib/db/db";
import React from "react";
import { CarCard } from "./_components/car-card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { CreateUser } from "@/lib/db/create-user";

async function VehiclePage() {
  await CreateUser()
  const cars = await db.car.findMany({
    orderBy: {
      createdAt: "desc",
    },
    include: {
      brand: true,
      Reserve: true,
    },
  });

  return (
    <div className="h-[80vh]">
      <ScrollArea className='h-full' >
        <CarCard data={cars} />
      </ScrollArea>
    </div>
  );
}

export default VehiclePage;
