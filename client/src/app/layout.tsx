import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/app/globals.css";
import { Toaster } from "react-hot-toast";
const inter = Inter({ subsets: ["latin"] });
import ReactQueryProvider from "@/app/providers/queryClientProvider";

export const metadata: Metadata = {
  title: "Hypd",
  description: "Hypd is a platform for brands to connect with influencers and grow their business.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ReactQueryProvider>
            <div>
              <Toaster />
            </div>
            {children}
        </ReactQueryProvider>
      </body>
    </html>
  );
}
