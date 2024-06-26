"use client";

import { PayPalScriptProvider } from "@paypal/react-paypal-js";

export const PayPalProvider = ({ children }) => {
  return (
    <PayPalScriptProvider
      options={{
        clientId: process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID,
      }}
    >
      {children}
    </PayPalScriptProvider>
  );
};
