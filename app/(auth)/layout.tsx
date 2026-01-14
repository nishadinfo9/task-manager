import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { Toaster } from "sonner";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Task Magager | Track Every Seconds",
  description: "Track your time easily with task manager",
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className={`${poppins.className}`}>
        <div>nav</div>

        {children}
        <Toaster />
        <div>nav</div>
      </body>
    </html>
  );
}
