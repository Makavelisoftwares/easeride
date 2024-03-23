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
        </div>
      </SheetContent>
    </Sheet>
  );
};
