import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Abhay Kumar Sinha | Director at SILKROAD TOUR & Travel Creator",
  description: "Personal portfolio of Abhay Kumar Sinha. Director at SILKROAD TOUR (I) PVT. LTD., specialist in inbound cultural & Buddhist pilgrimage tourism, and founder of Amazingly Abhay.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-slate-50 text-slate-900 antialiased selection:bg-amber-200 selection:text-amber-900">
        {children}
      </body>
    </html>
  );
}
