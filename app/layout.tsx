import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Zenit | Mikrobilje i funkcionalni sokovi",

  description:
    "Sveže mikrobilje i funkcionalni sokovi proizvedeni sa fokusom na kvalitet, ukus i zdrav način života.",

  openGraph: {
    title: "Zenit Mikrobilje",
    description:
      "Sveže mikrobilje i funkcionalni sokovi proizvedeni sa fokusom na kvalitet, ukus i zdrav način života.",

    type: "website",

    locale: "sr_RS",

    siteName: "Zenit",

    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Zenit Mikrobilje",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Zenit Mikrobilje",
    description:
      "Sveže mikrobilje i funkcionalni sokovi proizvedeni sa fokusom na kvalitet, ukus i zdrav način života.",
    images: ["/og-image.jpg"],
  },
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