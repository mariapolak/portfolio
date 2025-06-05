import type { Metadata } from "next";
import "./globals.css";
import Return from "@/app/return";
import Footer from "@/app/footer";

export const metadata: Metadata = {
  title: "Portfolio | Maria Polak",
  description: "",
};

export default function ProjectLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased`}
      >
        <Return />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}