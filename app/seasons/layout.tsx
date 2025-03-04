import type { Metadata } from "next";
import AppNavbar from "@/components/AppNavbar";

export const metadata: Metadata = {
  title: "Formula Pedia - Seasons",
  description: "A small wiki about Formula 1",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <AppNavbar active="seasons" />
      {children}
    </>
  );
}
