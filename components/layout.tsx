import type { Metadata } from "next";
import "./globals.css";
import Navbar from "../app/navbar";
import Footer from "../app/footer";

export const metadata: Metadata = {
  title: "Portfolio | Maria Polak",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased`}
      >
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}