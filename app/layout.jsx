import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "sonner";
import { PayPalProvider } from "@/providers/paypal-provider";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "EaseRide",
  description: "Car Hire Management System",
};

export default async function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <PayPalProvider>
        <html lang="en">
          <body className={`${inter.className} `}>
            <Analytics />
            <Toaster position="top-right" />
            {children}
          </body>
        </html>
      </PayPalProvider>
    </ClerkProvider>
  );
}
