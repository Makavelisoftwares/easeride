"use client";

import { PayPalButtons } from "@paypal/react-paypal-js";
import axios from "axios";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export const PaymentSheet = ({ response, reservation }) => {
  const id = reservation?.id;
  const { push } = useRouter();

  return (
    <Sheet open={response}>
      <SheetContent>
        <SheetHeader>
          <SheetTitle className="my-4">Make Your payments</SheetTitle>
        </SheetHeader>

        <div>
          <div className="my-2">
            <div className="text-xl text-zinc-500">Total Amount</div>
            <div className="text-xl font-bold">${reservation?.totalprice}</div>
          </div>
          <div className="my-2">
            <div className="text-sm text-zinc-500">Total Hours</div>
            <div className="text-sm font-bold">${reservation?.totalhours}</div>
          </div>
          <div>
            <PayPalButtons
              style={{
                label: "checkout",
              }}
              onApprove={(data, actions) => {
                console.log("approved", data);
                actions.order.capture();

                toast.success(
                  `Payment with orderId ${data.orderID} was successful`
                );

                push("/history");
              }}
              onCancel={(data) => {
                toast.error(
                  `Transaction with orderId ${data.orderID} was cancelled`
                );
              }}
              createOrder={async () => {
                const resp = await axios.post("/api/checkout", {
                  reserveId: id,
                  price: `${JSON.parse(reservation?.totalprice)}`,
                });

                const order = resp?.data;

                return order.id;
              }}
            />
          </div>

          <div className="flex items-center justify-center text-center text-zinc-500 my-3">
            or
          </div>

          <div>
            <div className="text-xl text-emerald-500 font-bold">
              LIPA NA MPESA
            </div>
            <div className="flex mt-3 items-center space-x-4">
              <div>paybill</div>
              <div>555571</div>
            </div>
            <div className="flex mt-3 items-center space-x-4">
              <div>Acc. number</div>
              <div>83893892282</div>
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};
