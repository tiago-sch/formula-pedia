import type { Metadata } from "next";
import { Gabarito, Domine } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const sansSerif = Gabarito({
  variable: "--font-sans-serif",
  subsets: ["latin"],
});

const serif = Domine({
  variable: "--font-serif",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Formula Pedia",
  description: "A small wiki about Formula 1",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${sansSerif.variable} ${serif.variable} antialiased`}
      >
        <div className="container p-6 mx-auto">
          {children}
          <footer className="bg-neutral text-neutral-content items-center p-4 my-5 rounded">
            <p className="text-sm font-bold">
              Made with love for the sport by{" "}
              <Link className="underline" href="https://tiagoschmidt.com" target="_blank">Tiago Schmidt</Link>
            </p>
          </footer>
        </div>
      </body>
    </html>
  );
}
