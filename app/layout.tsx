import type { Metadata } from "next";
import "./globals.css";



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