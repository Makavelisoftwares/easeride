import { Button } from "@/components/ui/button";
import { db } from "@/lib/db/db";
import {
  ArrowLeftCircle,
  Car,
  CarFront,
  CheckCheck,
  Fuel,
  HardDrive,
  LayoutDashboard,
  RockingChair,
  Settings,
  X,
} from "lucide-react";
import Link from "next/link";
import React from "react";
import { EmblaImage } from "./_components/embla";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BookingForm } from "./_components/booking-form";

async function SingleVehiclePage({ params }) {
  const id = params.id;

  const car = await db.car.findUnique({
    where: {
      id,
    },
    include: {
      brand: true,
      Images: true,
      Reserve: true,
    },
  });

  return (
    <div>
      <div>
        <Button className="my-2" asChild variant="ghost" size="sm">
          <Link className="flex items-center space-x-2" href="/vehicles">
            <ArrowLeftCircle />
            <div>Back</div>
          </Link>
        </Button>
      </div>

      <div className="grid md:grid-cols-2 grid-cols-1 gap-2">
        <div>
          {/* images */}
          <div>
            <div>
              <EmblaImage image={car?.image} images={car?.Images} />
            </div>
          </div>

          {/* specifications */}
          <Card className="mt-2">
            <CardContent className="p-2">
              <div className="space-y-2">
                <div className="flex items-center">
                  <div className="w-[60px]">
                    <Fuel className="text-sky-500" />
                  </div>
                  <div className="text-sm">{car?.fuel}</div>
                </div>

                <div className="flex items-center">
                  <div className="w-[60px]">
                    <Car className="text-sky-500" />
                  </div>
                  <div className="text-sm">{car?.bodytype}</div>
                </div>

                <div className="flex items-center">
                  <div className="w-[60px]">
                    <Settings className="text-sky-500" />
                  </div>
                  <div className="text-sm">{car?.transmission}</div>
                </div>

                <div className="flex items-center">
                  <div className="w-[60px]">
                    <CarFront className="text-sky-500" />
                  </div>
                  <div className="text-sm">{car?.regno}</div>
                </div>

                <div className="flex items-center">
                  <div className="w-[60px]">
                    <HardDrive className="text-sky-500" />
                  </div>
                  <div className="text-sm">{car?.kmsdriven} kms</div>
                </div>

                <div className="flex items-center">
                  <div className="w-[60px]">
                    <RockingChair className="text-sky-500" />
                  </div>
                  <div className="text-sm">{car?.capacity} seats</div>
                </div>

                <div className="flex items-center">
                  <div className="w-[60px]">
                    <LayoutDashboard className="text-sky-500" />
                  </div>
                  <div className="text-sm">{car?.brand?.name}(brand)</div>
                </div>
              </div>

              <div className="space-y-2 mt-3">
                <div className="flex items-center space-x-3">
                  <div className="w-[350px] text-lg font-bold">FASTAG</div>
                  {car?.fastag ? (
                    <CheckCheck className="text-green-400" />
                  ) : (
                    <X className="text-rose-300" />
                  )}
                </div>

                <div className="flex items-center space-x-3">
                  <div className="w-[350px] text-lg font-bold">SUNROOF</div>
                  {car?.sunroof ? (
                    <CheckCheck className="text-green-400" />
                  ) : (
                    <X className="text-rose-300" />
                  )}
                </div>

                <div className="flex items-center space-x-3">
                  <div className="w-[350px] text-lg font-bold">
                    CRUISECONTROL
                  </div>
                  {car?.cruisecontrol ? (
                    <CheckCheck className="text-green-400" />
                  ) : (
                    <X className="text-rose-300" />
                  )}
                </div>

                <div className="flex items-center space-x-3">
                  <div className="w-[350px] text-lg font-bold">360 CAMERA</div>
                  {car?.camera ? (
                    <CheckCheck className="text-green-400" />
                  ) : (
                    <X className="text-rose-300" />
                  )}
                </div>

                <div className="flex items-center space-x-3">
                  <div className="w-[350px] text-lg font-bold">
                    HOME DELIVERY
                  </div>
                  {car?.delivery ? (
                    <CheckCheck className="text-green-400" />
                  ) : (
                    <X className="text-rose-300" />
                  )}
                </div>

                <div className="flex items-center space-x-3">
                  <div className="w-[350px] text-lg font-bold">AIRBAGS</div>
                  {car?.airbags ? (
                    <CheckCheck className="text-green-400" />
                  ) : (
                    <X className="text-rose-300" />
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="text-3xl flex items-center justify-between font-bold">
              <div>{car?.name}</div>
              <div>${car?.priceperhour}/hr</div>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-sm text-zinc-600 mt-3">
              {car?.description}
            </div>

            <div>
              <BookingForm price={car?.priceperhour} id={car?.id} />
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export default SingleVehiclePage;
