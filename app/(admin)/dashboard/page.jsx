import React from "react";
import { AdminHeader } from "../_comonents/header-admin";
import { DashboardCards } from "./_components/dashboard-cards";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { DashBoardTable } from "./_components/dashboard-table";
import { db } from "@/lib/db/db";
import { GraphDashboard } from "./_components/dashboard-graph";
// import { GraphDashboard } from "./_components/dashboard-graph";

async function DashboardPage() {
  const cars = await db.car.findMany();
  const brands = await db.brand.findMany();

  const Today = new Date();

  const bookings = await db.booking.findMany({
    include: {
      reserve: {
        include: {
          car: true,
        },
      },
    },
    orderBy: {
      createdAt: "desc",
    },
  });
  const todayBoookings = bookings.filter(
    (item) => item.createdAt.getDate() == Today.getDate()
  );

  return (
    <div>
      <div>
        <AdminHeader title="Dashboard" description="" />
      </div>

      <Card className="border-none shadow-none mt-4">
        <CardContent className="grid md:grid-cols-4 grid-cols-1 gap-2">
          <DashboardCards
            color={"text-white bg-gradient-to-br from-emerald-500 to-black"}
            title="Total Bookings"
            href={"/bookings"}
            number={bookings?.length}
          />
          <DashboardCards
            color={
              "text-white truncate bg-gradient-to-br from-purple-500 to-black"
            }
            title="Today's Booking"
            href={"/bookings"}
            number={todayBoookings?.length}
          />
          <DashboardCards
            color={"text-white bg-gradient-to-br from-amber-500 to-black"}
            title="Total Brands"
            href={"/brands"}
            number={brands?.length}
          />
          <DashboardCards
            color={"text-white bg-gradient-to-br from-rose-500 to-black"}
            title="Total Cars"
            href={"/cars"}
            number={cars?.length}
          />
        </CardContent>
      </Card>

      {/* graph */}
      <Card className='border-none shadow-none'>
        <CardContent className='grid md:grid-cols-2 grid-cols-1 p-2 gap-1'>
          <Card className="col-span-1 border-none  shadow-none">
            <CardContent className="p-3">
              <GraphDashboard bookings={bookings} />
            </CardContent>
          </Card>

          <Card className=" col-span-1 border-none  shadow-none mt-4 w-full">
            <CardHeader>
              <CardTitle>Today's Bookings</CardTitle>
            </CardHeader>
            <CardContent className="">
              <DashBoardTable data={todayBoookings} />
            </CardContent>
          </Card>
        </CardContent>
      </Card>
    </div>
  );
}

export default DashboardPage;
