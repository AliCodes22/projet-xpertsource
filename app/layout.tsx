import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/assets/styles/globals.css";
import Header from "./components/Header";

const inter = Inter({
  subsets: ["latin"],
});

// metadata
export const metadata: Metadata = {
  title: "Gadget Hub",
  description: "Trouvez la meilleure technologie au meilleur prix",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
