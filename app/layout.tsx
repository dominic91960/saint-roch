import type { Metadata } from "next";
import { Montserrat } from "next/font/google";

import ToastContextProvider from "@/store/toast-context";
import "./globals.css";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Saint Roch",
  description: "Effortless Warmth for Every Home",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} antialiased`}>
        <ToastContextProvider>{children}</ToastContextProvider>
      </body>
    </html>
  );
}
