import type { Metadata } from "next";
import SiteHeader from "@/components/SiteHeader";
import "./globals.css";

export const metadata: Metadata = {
  title: "Podsite - Your Podcast Destination",
  description: "Discover engaging podcast episodes on Podsite. Listen to the latest conversations and stories.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <div className="page-container">
          <SiteHeader />
          <main id="main-content">{children}</main>
        </div>
      </body>
    </html>
  );
}
