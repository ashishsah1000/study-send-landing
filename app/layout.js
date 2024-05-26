import { Montserrat } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/context/ThemeProvider";
import { Toaster } from "@/components/ui/toaster";
import Navbar from "@/components/Layout/Navbar";
import Footer from "@/components/Layout/Footer";
import BottomNav from "@/components/Layout/BottomNav";
import SideNav from "@/components/Home/SideNav";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: "Study Send",
  description: "Store, explore the world of CRN notes",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          {/* <BottomNav/> */}
          {/* <SideNav/> */}
          {children}
        </ThemeProvider>
        <Toaster />
      </body>
    </html>
  );
}
