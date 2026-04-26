import type { Metadata } from "next";
import { Cormorant_Garamond } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-cormorant",
});

export const metadata: Metadata = {
  title: "WAGYUMAFIA × Wellness",
  description: "Dinner Invitation - 2026.04.26",
  openGraph: {
    title: "WAGYUMAFIA × Wellness",
    description: "Dinner Invitation - 2026.04.26",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${cormorant.variable} font-serif antialiased`}>
        {children}
      </body>
    </html>
  );
}
