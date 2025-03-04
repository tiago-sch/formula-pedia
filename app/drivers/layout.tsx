import type { Metadata } from "next";
import AppNavbar from "@/components/AppNavbar";

export const metadata: Metadata = {
  title: "Formula Pedia - Drivers",
  description: "A small wiki about Formula 1",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <AppNavbar active="drivers" />
      {children}
    </>
  );
}
