import type { Metadata } from "next";
import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Zenit Mikrobilje",
  description:
    "Sveže uzgojeno mikrobilje i funkcionalni sokovi za zdraviji način života.",
};

export const metadata: Metadata = {
  title: "Zenit | Mikrobilje i funkcionalni sokovi",
  description:
    "Sveže mikrobilje i funkcionalni sokovi proizvedeni sa fokusom na kvalitet, ukus i zdrav način života.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sr">
      <body>{children}</body>
    </html>
  );
}