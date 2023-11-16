import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Sidenav from "@/components/Sidenav";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Dashboard",
};

export default function RootLayout({ children}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex">
          <div className="flex relative">
            <Navbar />
          </div>
          <div className="flex ml-[17%] w-full">
            <div className="flex-1">
              <Sidenav />
              <div className="px-8 py-6 h-[calc(100vh - 110px)]">{children}</div>
            </div>
          </div>
        </div>
    </body>
    </html>
  );
}
