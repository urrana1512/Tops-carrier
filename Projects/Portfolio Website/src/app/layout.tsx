import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import React from "react";
import { ThemeProvider } from "@/components/common/ThemeProvider";
import SmoothScroll from "@/components/common/SmoothScroll";
import Cursor from "@/components/common/Cursor";
import Navbar from "@/components/common/Navbar";
// import Preloader from "@/components/common/Preloader";
import AnimationWrapper from "@/components/common/AnimationWrapper";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Udit Rana | Full Stack Developer & UI/UX Designer",
  description: "Ultra premium 3D animated portfolio of Udit Rana, a Full Stack Developer and UI/UX Designer specialized in high-end web experiences.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <AnimationWrapper>
            {/* <Preloader /> */}
            <SmoothScroll />
            <Cursor />
            <Navbar />
            <main className="relative z-10">
              {children}
            </main>
          </AnimationWrapper>
        </ThemeProvider>
      </body>
    </html>
  );
}
