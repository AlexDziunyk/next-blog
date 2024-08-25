import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.scss";
import Navbar from "@/components/Navbar/Navbar";
import LoginModal from "@/components/LoginModal/LoginModal";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Next Blog",
  description: "Simple blog created with NextJS",
};

export default function RootLayout({
  children,
  authModal,
}: Readonly<{
  children: React.ReactNode;
  authModal: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <Navbar />
        {children}
        {authModal}
      </body>
    </html>
  );
}
