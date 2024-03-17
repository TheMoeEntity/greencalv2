import type { Metadata } from "next";
import { Inter } from "next/font/google";
import 'bootstrap/dist/css/bootstrap.css'
import "./globals.css";
import './custom.css'
import AppLayout from "@/components/AppLayout";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Greencal Foundation - Empowering Lives for a Brighter Future",
  description:
    "Greencal Foundation provides hope and support through medical assistance, education, and community outreach.",
  keywords:
    "Greencal Foundation, Adum Obinna,  Mrs. Juliana Calista Adum, charity, education, outreach, scholarships, Abakaliki, Ebonyi State, Nigeria",
  authors: [{ name: "Moses Chukwudi Nwigberi" }],
  creator: "Moses Chukwudi Nwigberi",
  applicationName: "Greencal Foundation",
  icons: [
    {
      rel: "icon",
      type: "image/png",
      sizes: "32x32",
      url: "/favicon-32x32.png",
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "16x16",
      url: "/favicon-16x16.png",
    },
    {
      rel: "apple-touch-icon",
      sizes: "180x180",
      url: "/apple-touch-icon.png",
    },
  ],
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
      // className={inter.className}
      >
        <AppLayout>
          {children}
        </AppLayout>
      </body>
    </html>
  );
}
