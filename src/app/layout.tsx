import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Noriel Gecolea's Links",
  description: "My world.",
  openGraph: {
    title: "Mondragon Links",
    description: "My world.",
    url: "https://links.norielgecolea.com",
    siteName: "Noriel Gecolea's Links",
    images: [
      {
        url: "https://links.norielgecolea.com/mecartoon.png", // replace with your desired preview image
        width: 630,
        height: 630,
        alt: "",
      },
    ],
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
