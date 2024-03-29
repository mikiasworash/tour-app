import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Enchanting Ethiopia",
  description: "A Tour Guide Application",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="container mx-auto">
          <div className="flex items-start justify-center min-h-screen">
            <div className="mt-20"> {children}</div>
          </div>
        </main>
      </body>
    </html>
  );
}
