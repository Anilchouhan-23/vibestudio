import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export const metadata: Metadata = {
  title: "TechVibeStudio - Empowering Your Digital Journey",
  description:
    "TechVibeStudio offers premium desktop development, web solutions, and digital services tailored for your business growth.",
  keywords:
    "web development, desktop software, digital solutions, tech services, TechVibeStudio",
  openGraph: {
    title: "TechVibeStudio - Empowering Your Digital Journey",
    description:
      "Premium desktop development, web solutions, and digital services tailored for your business.",
    url: "https://techvibestudio.store",
    siteName: "TechVibeStudio",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-white text-gray-900 antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
