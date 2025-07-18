import "./globals.css";
import { Metadata } from "next";
import { Toaster } from "sonner";

export const metadata: Metadata = {
  title: "NodeWave Todo App",
  description: "Frontend Assesment for Candidate",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {children}
        <Toaster richColors position="top-center" />
      </body>
    </html>
  );
}
